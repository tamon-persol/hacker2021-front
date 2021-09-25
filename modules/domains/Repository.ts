import axios, { AxiosResponse } from 'axios';
import { Itinerary, Location } from 'modules/domains/models/Itinerary';
import { mapBoxToken } from 'components/MapComponent/MapComponent';

const baseDomain = 'http://localhost:5050';
const baseURL = `${baseDomain}`;

const repository = axios.create({
  baseURL,
  headers: {
    // "Authorization": "Bearer xxxxx"
  }
});

export class Repository {
  async getItinerary(id: number): Promise<AxiosResponse<Itinerary>> {
    return repository.get(`${baseURL}/itinerary`, { params: { id: id } });
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async getGeoJsonBetweenTwoPoint(start: Location, end: Location) {
    return repository.get(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${start.long},${start.lat};${end.long},${end.lat}`,
      {
        params: { access_token: mapBoxToken, geometries: 'geojson' }
      }
    );
  }
}
