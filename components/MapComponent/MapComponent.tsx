import React, { useState } from 'react';
import ReactMapGl, { Layer, LayerProps, Marker, Source } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import PolylineOverlay from 'components/PolylineOverlayComponent/PolylineOverlayComponent';
import { Itinerary, Location } from 'modules/domains/models/Itinerary';
import * as GeoJSON from 'geojson';
import { Place } from '@material-ui/icons';

export const mapBoxToken =
  'pk.eyJ1IjoidGFtb25hYSIsImEiOiJja3R6N201enUzYmZqMzBtcDRzc200ZjZpIn0.dOSiDM21rDLUqvU_kCyrdg';

export type ViewPortType = {
  width: string;
  height: string;
  latitude: number;
  longitude: number;
  zoom: number;
};

const generateLayerAndGeoJson = (points: [][], color: string) => {
  return {
    layerStyle: {
      id: `${color}-id`,
      type: 'line',
      source: 'route',
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': color,
        'line-width': 4
      }
    } as LayerProps,
    geojson: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: points
          }
        }
      ]
    } as GeoJSON.FeatureCollection<GeoJSON.Geometry>
  };
};

export type State = {
  viewport: ViewPortType;
};

export type MapComponentProps = {
  zoom?: number;
  itinerary: Itinerary;
};

export const MapComponent = (props: MapComponentProps) => {
  const [state, setState] = useState<State>({
    viewport: {
      width: '100vw',
      height: '60vh',
      latitude: props.itinerary.markers[0].location.lat,
      longitude: props.itinerary.markers[0].location.long,
      zoom: props.zoom || 9
    }
  });

  const displayMarkers = () => {
    return props.itinerary.markers.map((marker, i) => (
      <Marker
        key={i}
        latitude={marker.location.lat}
        longitude={marker.location.long}
        offsetLeft={-10}
        offsetTop={-40}
      >
        <div>
          <div style={{ color: 'red' }}>{marker.type}</div>
          <Place style={{ color: 'red' }} />
        </div>
      </Marker>
    ));
  };

  const getItineraryComponent = () => {
    return props.itinerary.points.map((data, i) => {
      let color;

      switch (i) {
        case 0:
          color = '#2df775';
          break;
        case 1:
          color = '#1c16f7';
          break;
        case 2:
          color = '#f7003b';
          break;
        default:
          color = '#f7008f';
      }
      const config = generateLayerAndGeoJson(data.points, color);
      return (
        <Source
          key={i}
          id={`my-data-${i}`}
          type="geojson"
          data={config.geojson}
        >
          <Layer {...config.layerStyle} />
        </Source>
      );
    });
  };

  return (
    <div style={{ display: 'grid', placeItems: 'center', margin: '32px 0' }}>
      <ReactMapGl
        {...state.viewport}
        onViewportChange={(viewport: ViewPortType) => {
          setState({ viewport });
        }}
        mapboxApiAccessToken={mapBoxToken}
        mapStyle="mapbox://styles/mapbox/streets-v10"
      >
        {getItineraryComponent()}
        {displayMarkers()}
      </ReactMapGl>
    </div>
  );
};
