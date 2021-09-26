import React, { useCallback, useEffect, useState } from 'react';
import { MapComponent } from 'components/MapComponent/MapComponent';
import { Repository } from 'modules/domains/Repository';
import {
  Itinerary,
  ItineraryService,
  Location
} from 'modules/domains/models/Itinerary';
import QrScannerComponent from 'components/QRScannerComponent';
import { Backdrop, Button, CircularProgress } from '@material-ui/core';

const Home = (): JSX.Element => {
  const [state, setState] = useState<Itinerary>({
    markers: [],
    routes: [],
    points: []
  });
  const [loading, setLoading] = useState(true);
  const [isScan, setIsScan] = useState(false);

  const fetchMyAPI = useCallback(async () => {
    setLoading(true);

    const service = new ItineraryService();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = await service.getLocation(1);

    console.log(result);
    setState(result);
    setLoading(false);
  }, []);

  const handleScan = async (e: string) => {
    if (e !== null) {
      setLoading(true);

      const service = new ItineraryService();

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const result = await service.getLocation(e);

      setIsScan(true);
      setState(result);
      setLoading(false);
    }
  };

  if (!isScan) {
    return <QrScannerComponent handleScan={handleScan} />;
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Comet</h1>
      {!loading ? (
        <div>
          <MapComponent itinerary={state} />
          <div>
            {state.markers.map((marker, i) => (
              <div key={i}>
                actor: {marker.type} | name: {marker.name}
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', placeItems: 'center' }}>
            <Button
              variant="contained"
              onClick={() => {
                setIsScan(false);
              }}
            >
              Scan QR
            </Button>
          </div>
        </div>
      ) : (
        <Backdrop sx={{ color: '#fff' }}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </div>
  );
};

export default Home;
