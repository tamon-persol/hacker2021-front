import React, { useRef, useState } from 'react';
import ReactMapGl from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';

const mapBoxToken =
  'API Tokken';

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
};

export const MapComponent = (props: MapComponentProps) => {
  const [state, setState] = useState<State>({
    viewport: {
      width: '100vw',
      height: '100vh',
      latitude: 35.75127833344205,
      longitude: 139.77243871559978,
      zoom: props.zoom || 10
    }
  });

  return (
    <div>
      <ReactMapGl
        {...state.viewport}
        onViewportChange={(viewport: ViewPortType) => setState({ viewport })}
        mapboxApiAccessToken={mapBoxToken}
        mapStyle="mapbox://styles/mapbox/streets-v10"
      />
    </div>
  );
};
