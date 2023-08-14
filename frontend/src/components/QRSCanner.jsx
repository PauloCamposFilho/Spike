import React, { useState } from 'react';
import QrReader from 'react-web-qr-reader';

const Test = (props) => {
  const [data, setData] = useState('No result');

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text)
              .then(console.log(data));
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '20%' }}
      />
      <p>{data}</p>
    </>
  );
};

export {Test}