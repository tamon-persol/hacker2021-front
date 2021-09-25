import { Repository } from 'modules/domains/Repository';

export type Itinerary = {
  markers: Marker[];
  routes: Location[];
  points: Point[];
};
export type Point = {
  points: [][];
};
export type Marker = {
  name: string;
  type: string; // Grower | Batch | Producer | Brew | Venues
  location: Location;
};

export type Location = {
  long: number;
  lat: number;
};

export class ItineraryService {
  async getLocation(id: number): Promise<any> {
    const repo = new Repository();
    const { data } = await repo.getItinerary(id);
    const promises = [];
    let i = data.markers.length - 1;
    console.log(data);
    while (i > 0) {
      promises.push(
        repo.getGeoJsonBetweenTwoPoint(
          data.markers[i].location,
          data.markers[i - 1].location
        )
      );
      i--;
    }
    const result = await Promise.all(promises);
    const points = result.map((itinerary) => ({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
      points: itinerary.data.routes[0].geometry.coordinates
    }));
    return {
      markers: data.markers,
      points: points
    };
  }
}
