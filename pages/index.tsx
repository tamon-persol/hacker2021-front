import React, { useCallback, useEffect, useState } from 'react';
import { MapComponent } from 'components/MapComponent/MapComponent';
import { Repository } from 'modules/domains/Repository';
import {
  Itinerary,
  ItineraryService,
  Location
} from 'modules/domains/models/Itinerary';
import QrScannerComponent from 'components/QRScannerComponent';
import { Backdrop, CircularProgress } from '@material-ui/core';

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

  const handleScan = async (e: number | string) => {
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
      {!loading ? (
        <MapComponent itinerary={state} />
      ) : (
        <Backdrop sx={{ color: '#fff' }}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </div>
  );
};

export default Home;
