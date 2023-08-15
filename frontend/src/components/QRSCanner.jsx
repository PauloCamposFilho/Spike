// import React, { useState } from 'react';
// import QrReader from 'react-web-qr-reader';

// const TestScanner = (props) => {
//   const [data, setData] = useState('No result');

//   return (
//     <>
//       <QrReader
//         onResult={(result, error) => {
//           if (!!result) {
//             setData(result?.text)
//               .then(console.log(data));
//           }

//           if (!!error) {
//             console.info(error);
//           }
//         }}
//         style={{ width: '100%' }}
//       />
//       <p>{data}</p>
//     </>
//   );
// };

// export {TestScanner}

import { Grid } from "@mui/material";
import React, {
  useState
} from "react";
import QrReader from "react-web-qr-reader";

const TestScanner = () => {
  const delay = 500;

  const previewStyle = {
    height: 240,
    width: 320
  };

  const [result, setResult] = useState("No result");

  const handleScan = (result) => {
    if (result) {
      console.log(result)
      setResult(result.data);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <Grid container item style={{flexDirection: "column"}} spacing={10}>
      <Grid item xs={12}>
        <QrReader
          delay={delay}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
        />
      
      </Grid>
      <Grid item xs={12}>
        <h3>{result}</h3>
      </Grid>
    </Grid>
  );
};

export default TestScanner;