import {Html5QrcodeScanner} from "html5-qrcode";
import { useEffect } from "react";

const QRCodeReader: React.FC = () => {

  useEffect(() => {
    let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: {width: 250, height: 250} },
    /* verbose= */ false);
    html5QrcodeScanner.render(
      (data: any) => console.log('success ->', data), 
      (err: any) => console.log('err ->', err)
    );
  }, []);

  return (
    <div id='reader'></div>
  );
}
export default QRCodeReader
