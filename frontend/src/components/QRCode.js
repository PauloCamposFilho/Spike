import { useContext } from 'react';
import { UserContext } from '../contexts/userContext';
import ReactDOM from 'react-dom';
import { QRCodeSVG } from 'qrcode.react'
import QrCodeIcon from '@mui/icons-material/QrCode';

function QRCodeGenerator(props) {
  // STATE MANAGEMENT FOR QR CODE CONTENT
  // STATE MANAGEMENT FOR QR CODE MODAL
  const { state } = useContext(UserContext);

  const { qrType, label, endpoint, OpenQR } = props

  const handleClick = () => {
    // unsure exactly what this dispatch helper will have to handle at present
    OpenQR();
  }

  return (
    <div>
      <button onClick={handleClick}><QrCodeIcon /></button>

      { state.qrModal.isOpen && 
      <QRCodeSVG 
        value={endpoint}
        size={128}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"L"}
        includeMargin={false}
        imageSettings={{
          src: "../../public/favicon.ico",
          x: undefined,
          y: undefined,
          height: 24,
          width: 24,
          excavate: true,
        }} /> }
    </div>
  )
}