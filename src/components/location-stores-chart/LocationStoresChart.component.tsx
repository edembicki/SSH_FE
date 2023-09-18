import React, { Component } from 'react'  
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default class Chart extends Component {
    chart: any;  
    
  
    componentDidMount() {  

      am4core.useTheme(am4themes_animated);
      
      let chart = am4core.create("MapChart", am4maps.MapChart);
      
      type StoreData = {
        state: any;
        long: number;
        lat: number;
        location: any;
        city: any;
        count: number;
        target?: string;
      };
      
      type RegionalSeriesItem = {
        target: string;
        type: string;
        name: string;
        count: number;
        stores: number;
        lat: number;
        long: number;
        state: string;
        markerData: StoreData[]; // Adjust the type according to your data structure
        series?: any; // You can adjust the type for the series if needed
      };

      type RegionalSeries = {
        [key: string]: RegionalSeriesItem;
      };

      let regionalSeries: RegionalSeries = {
        US: {
          markerData: [],
          series: createSeries("stores"),
          count: 0, // Add count and stores properties here
          stores: 0,
          lat: 0,
          long: 0,
          state: "",
          type: "",
          name: "",
          target: "",
        },
      };       

      let currentSeries: { hide: () => void; show: () => void; };
      

      chart.maxZoomLevel = 64;
        
      // Chart title
      let title = chart.titles.create();
      title.text = "Map";
      title.fontSize = 20;
      title.paddingBottom = 30;  

      // Set map definition
      chart.geodata = am4geodata_usaLow;

      // Set projection
      chart.projection = new am4maps.projections.AlbersUsa();

      let zoomOut = chart.chartContainer.createChild(am4core.ZoomOutButton);
      zoomOut.align = "right";
      zoomOut.valign = "bottom";
      zoomOut.margin(10, 10, 10, 10);
      zoomOut.events.on("hit", function () {
        if (currentSeries) {
          currentSeries.hide();
        }
        chart.goHome();
        zoomOut.hide();
        currentSeries = regionalSeries.US.series;
        currentSeries.show();
      });

      // Create map polygon series
      let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
      polygonSeries.useGeodata = true;
      polygonSeries.calculateVisualCenter = true;

      // Configure series
      let polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = "{name}";
      polygonTemplate.fill = chart.colors.getIndex(0);
        
      // Load data when map polygons are ready
      chart.events.on("ready", loadStores);  
      
      // Loads store data
      function loadStores() {
        let loader = new am4core.DataSource();
        loader.url = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/TargetStores.json";
        loader.events.on("parseended", function(ev) {
          setupStores(ev.target.data);
          createSeries("stores");
        });
        loader.load();
      }

      // Creates a series
      function createSeries(heatfield: any) {
        let series = chart.series.push(new am4maps.MapImageSeries());
        series.dataFields.value = heatfield;

        let template = series.mapImages.template;
        template.verticalCenter = "middle";
        template.horizontalCenter = "middle";
        template.propertyFields.latitude = "lat";
        template.propertyFields.longitude = "long";
        template.tooltipText = "{name}:\n[bold]{stores} stores[/]";

        let circle = template.createChild(am4core.Circle);
        circle.radius = 10;
        circle.fillOpacity = 0.7;
        circle.verticalCenter = "middle";
        circle.horizontalCenter = "middle";
        circle.nonScaling = true;

        let label = template.createChild(am4core.Label);
        label.text = "{stores}";
        label.fill = am4core.color("#fff");
        label.verticalCenter = "middle";
        label.horizontalCenter = "middle";
        label.nonScaling = true;

        let heat = series.heatRules.push({
          target: circle,
          property: "radius",
          min: 10,
          max: 30
        });

        // Set up drill-down
        series.mapImages.template.events.on("hit", function(ev) {

          // Determine what we've clicked on
          let data = ev.target.dataItem.dataContext as RegionalSeriesItem;

          // No id? Individual store - nothing to drill down to further
          if (!data.target) {
            return;
          }

          // Create actual series if it hasn't been yet created
          if (!regionalSeries[data.target].series) {
            regionalSeries[data.target].series = createSeries("count");
            regionalSeries[data.target].series.data = data.markerData;
          }

          // Hide current series
          if (currentSeries) {
            currentSeries.hide();
          }

          // Control zoom
          if (data.type == "state") {
            let statePolygon = polygonSeries.getPolygonById("US-" + data.state);
            chart.zoomToMapObject(statePolygon);
          }
          else if (data.type == "city") {
            chart.zoomToGeoPoint({
              latitude: data.lat,
              longitude: data.long
            }, 64, true);
          }
          zoomOut.show();

          // Show new targert series
          currentSeries = regionalSeries[data.target].series;
          currentSeries.show();
        });


        return series;
      }

      function setupStores(data: { query_results: StoreData[] }) {

        // Init country-level series
        regionalSeries.US = {
          target: 'US',
          type: 'country',
          name: 'United States',
          count: 0,
          stores: 0,
          lat: 0,
          long: 0,
          state: 'US',
          markerData: [],
          series: createSeries("stores"),
        };

        // Set current series
        currentSeries = regionalSeries.US.series;
      
        am4core.array.each(data.query_results, function(store: any) {
          let storeArray = {
            state: store.MAIL_ST_PROV_C,
            long: am4core.type.toNumber(store.LNGTD_I),
            lat: am4core.type.toNumber(store.LATTD_I),
            location: store.co_loc_n,
            city: store.mail_city_n,
            count: am4core.type.toNumber(store.count)
          };
        
          // Process state-level data
          if (regionalSeries[storeArray.state] == undefined) {
            let statePolygon = polygonSeries.getPolygonById("US-" + store.state);
            if (statePolygon) {

              // Add state data
              regionalSeries[store.state] = {
                target: store.state,
                type: "state",
                name: store.state,
                count: store.count,
                stores: 1,
                lat: statePolygon.visualLatitude,
                long: statePolygon.visualLongitude,
                state: store.state,
                markerData: []
              };
              regionalSeries.US.markerData.push(storeArray);

            }
            else {
              return;
            }
          }
          else {
            regionalSeries[storeArray.state].stores++;
            regionalSeries[storeArray.state].count += store.count;
          }

          // Process city-level data
          if (regionalSeries[store.city] == undefined) {
            regionalSeries[store.city] = {
              target: store.city,
              type: "city",
              name: store.city,
              count: store.count,
              stores: 1,
              lat: store.lat,
              long: store.long,
              state: store.state,
              markerData: [] as StoreData[], // Initialize as an empty array of StoreData
            };
            regionalSeries[store.state].markerData.push(storeArray);
          }
          else {
            regionalSeries[store.city].stores++;
            regionalSeries[store.city].count += store.count;
          }

          // Process individual store
          regionalSeries[store.city].markerData.push({
            state: store.state,
            long: store.long,
            lat: store.lat,
            location: store.location,
            city: store.city,
            count: store.count,
          });
        });
        regionalSeries.US.series.data = regionalSeries.US.markerData;
      }
      
      this.chart = chart;  
    }  
  
    componentWillUnmount() {  
        if (this.chart) {  
            this.chart.dispose();  
        }  
    }  
    render() {  
        return (  
            <div>  
                <div id="MapChart" style={{ width: "100%", height: "300px" }}></div>  
            </div>  
        )  
    }  
}  
