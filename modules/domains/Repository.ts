import axios, { AxiosResponse } from 'axios';
import { Itinerary } from 'modules/domains/models/Itinerary';

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
}
