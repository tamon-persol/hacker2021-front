import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false });

export type QRScannerComponentProps = {
  handleScan: (e: any) => void;
};
const QrScannerComponent = (props: QRScannerComponentProps) => {
  const [state, stateState] = useState({
    delay: 100,
    result: 'No result'
  });

  const handleError = (e: any) => {
    console.log(e);
  };
  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <QrReader
        delay={state.delay}
        onError={handleError}
        onScan={props.handleScan}
        style={{ width: '230px', height: '230px' }}
      />
    </div>
  );
};

export default QrScannerComponent;
