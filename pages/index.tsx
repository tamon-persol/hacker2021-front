import React, { useCallback, useEffect, useState } from 'react';
import { MapComponent } from 'components/MapComponent/MapComponent';
import { Repository } from 'modules/domains/Repository';
import {
  Itinerary,
  ItineraryService,
  Location
} from 'modules/domains/models/Itinerary';

const Home = (): JSX.Element => {
  const [state, setState] = useState<Itinerary>({
    markers: [],
    points: []
  });
  const [loading, setLoading] = useState(true);

  const fetchMyAPI = useCallback(async () => {
    setLoading(true);

    const service = new ItineraryService();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = await service.getLocation(1);

    console.log(result);
    setState(result);
    setLoading(false);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchMyAPI();
  }, [fetchMyAPI]);

  return <div>{!loading ? <MapComponent itinerary={state} /> : null}</div>;
};

export default Home;
