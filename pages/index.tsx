import React, { useCallback, useEffect, useState } from 'react';
import { MapComponent } from 'components/MapComponent/MapComponent';
import { Repository } from 'modules/domains/Repository';
import { Itinerary, Location } from 'modules/domains/models/Itinerary';

const Home = (): JSX.Element => {
  const [state, setState] = useState<Itinerary>({
    markers: [],
    routes: []
  });
  const [loading, setLoading] = useState(true);

  const fetchMyAPI = useCallback(async () => {
    setLoading(true);

    const repo = new Repository();
    const { data } = await repo.getItinerary(1);

    setState(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchMyAPI();
  }, [fetchMyAPI]);

  return (
    <div>
      {!loading ? <MapComponent routes={state.routes} /> : null}
    </div>
  );
};

export default Home;
