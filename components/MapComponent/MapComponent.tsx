import React, { useState } from 'react';
import ReactMapGl from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const mapBoxToken =
  'pk.eyJ1IjoidGFtb25hYSIsImEiOiJja3R6N201enUzYmZqMzBtcDRzc200ZjZpIn0.dOSiDM21rDLUqvU_kCyrdg';

export type ViewPortType = {
  width: string;
  height: string;
  latitude: number;
  longitude: number;
  zoom: number;
};

export const MapComponent = () => {
  const [state, setState] = useState({
    viewport: {
      width: '100vw',
      height: '100vh',
      latitude: 40.78343,
      longitude: -73.96625,
      zoom: 11
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
