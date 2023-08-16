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
  const homeTeamId = state.userData.teamsData.checked_in_team.teamInfoData.id;
  const previewStyle = {
    height: 240,
    width: 320, 
    margin: "10px"
  };

  const [result, setResult] = useState("No result");

  const handleScan = async (result) => {
    if (result) {
      console.log("homeTeamId in scan", homeTeamId)
      console.log("result", result)
      setResult("Received");
    try {
      const parsedResult = JSON.parse(result.data);
      console.log("pased result", parsedResult)
      let winnerTeamParam;
      let otherTeamParam;
      if (parsedResult.winnerTeamId) {
        winnerTeamParam = parsedResult.winnerTeamId.toString();
        otherTeamParam = homeTeamId;
      } else {
        winnerTeamParam = homeTeamId;
        otherTeamParam = parsedResult.otherTeamId.toString();
      }
      const playAreaParam = parsedResult.playAreaId.toString()
      const endpointParams = `${winnerTeamParam}/${otherTeamParam}/${playAreaParam}/`
      console.log("endpoint", endpointParams)
      const response = await fetch(`/api/matches/create/${endpointParams}`, {
        method: 'GET',
      });

      if (response.ok) {
        console.log('Success!!!')
        setResult('Success!!!')
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