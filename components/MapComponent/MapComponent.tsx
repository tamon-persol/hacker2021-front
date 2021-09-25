import React, { useState } from 'react';
import ReactMapGl, { Source, Layer } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import PolylineOverlay from 'components/PolylineOverlayComponent/PolylineOverlayComponent';
import { Location } from 'modules/domains/models/Itinerary';

const mapBoxToken =
  'pk.eyJ1IjoidGFtb25hYSIsImEiOiJja3R6N201enUzYmZqMzBtcDRzc200ZjZpIn0.dOSiDM21rDLUqvU_kCyrdg';

export type ViewPortType = {
  width: string;
  height: string;
  latitude: number;
  longitude: number;
  zoom: number;
};

export type State = {
  viewport: ViewPortType;
};

export type MapComponentProps = {
  zoom?: number;
  routes: Location[];
};

const calculateDistanceBetweenTwoPoints = (
  startPoint: Location,
  endPoint: Location
): number => {
  const R = 6371e3; // metres
  const r1 = (startPoint.lat * Math.PI) / 180; // φ, λ in radians
  const r2 = (endPoint.lat * Math.PI) / 180;
  const d1 = ((endPoint.lat - startPoint.lat) * Math.PI) / 180;
  const d2 = ((endPoint.long - startPoint.long) * Math.PI) / 180;

  const a =
    Math.sin(d1 / 2) * Math.sin(d1 / 2) +
    Math.cos(r1) * Math.cos(r2) * Math.sin(d2 / 2) * Math.sin(d2 / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // in metres
};

export const MapComponent = (props: MapComponentProps) => {
  const [state, setState] = useState<State>({
    viewport: {
      width: '100vw',
      height: '80vh',
      latitude: props.routes[0].lat,
      longitude: props.routes[0].long,
      zoom: props.zoom || 20
    }
  });

  // const distance = calculateDistanceBetweenTwoPoints(props.routes[0], props.routes[-1])

  return (
    <div>
      <ReactMapGl
        {...state.viewport}
        onViewportChange={(viewport: ViewPortType) => {
          console.log(viewport);
          setState({ viewport });
        }}
        mapboxApiAccessToken={mapBoxToken}
        mapStyle="mapbox://styles/mapbox/streets-v10"
      >
        <PolylineOverlay points={props.routes} />
      </ReactMapGl>
    </div>
  );
};
