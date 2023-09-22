import React, { Component } from 'react'  
import * as am4core from "@amcharts/amcharts4/core";  
import * as am4charts from "@amcharts/amcharts4/charts";  
import am4themes_animated from "@amcharts/amcharts4/themes/animated";  
import Data from './Data'  
  
export default class ChartTickets extends Component {
    chart: any;  
  
    componentDidMount() {  

      am4core.useTheme(am4themes_animated);
      let chart = am4core.create("SalesChart2", am4charts.XYChart);

      chart.data = Data;
        
      // Chart title
      let title = chart.titles.create();
      title.text = "Coupons usage";
      title.fontSize = 30;
      title.paddingBottom = 30;  

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;
      dateAxis.renderer.minGridDistance = 50;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.logarithmic = true;
      valueAxis.renderer.minGridDistance = 20;

      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "price";
      series.dataFields.dateX = "date";
      series.tensionX = 0.8;
      series.strokeWidth = 3;
      series.fill = am4core.color("#4989C3");
      series.fillOpacity = 0.2;

      let bullet = series.bullets.push(new am4charts.CircleBullet());
      bullet.circle.fill = am4core.color("#fff");
      bullet.circle.strokeWidth = 3;

      chart.cursor = new am4charts.XYCursor();
      chart.cursor.fullWidthLineX = true;
      chart.cursor.xAxis = dateAxis;
      chart.cursor.lineX.strokeWidth = 0;
      chart.cursor.lineX.fill = am4core.color("#000");
      chart.cursor.lineX.fillOpacity = 0.1;

      let range = valueAxis.axisRanges.create();
      range.value = 90.4;
      range.grid.stroke = am4core.color("#396478");
      range.grid.strokeWidth = 1;
      range.grid.strokeOpacity = 1;
      range.grid.strokeDasharray = "3,3";
      range.label.inside = true;
      range.label.text = "Average";
      range.label.fill = range.grid.stroke;
      range.label.verticalCenter = "bottom";
        
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
                <div id="SalesChart2" style={{ width: "100%", height: "290px" }}></div>  
            </div>  
        )  
    }  
}  
