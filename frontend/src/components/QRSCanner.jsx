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
  useContext,
  useState
} from "react";
import QrReader from "react-web-qr-reader";
import { UserContext } from "../contexts/UserContext";

const TestScanner = () => {
  const delay = 500;
  const { state } = useContext(UserContext);

  const previewStyle = {
    height: 240,
    width: 320, 
    margin: "10px"
  };

  const [result, setResult] = useState("No result");

  const handleScan = async (result) => {
    if (result) {
      console.log(result)
      setResult("Match result registered!");
    try {
      const response = await fetch(`/api/matches/create/1/2/1`, {
        method: 'GET',
      });

      if (response.ok) {
        console.log('Success!!!')
      } else {
        console.error('Error when logging match result');
      }
    } catch (error) {
      console.error('Error when logging match result', error);
    }
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <Grid container item style={{flexDirection: "column", justifyContent: "center", alignItems: "center", }} spacing={10}>
      <Grid container item xs={12} style={{justifyContent: "center", alignItems: "center", paddingLeft: "100px"}}>
        <Grid item xs={12}>
          <QrReader
            delay={delay}
            style={previewStyle}
            onError={handleError}
            onScan={handleScan}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <h3>{result}</h3>
      </Grid>
    </Grid>
  );
};

export default TestScanner;