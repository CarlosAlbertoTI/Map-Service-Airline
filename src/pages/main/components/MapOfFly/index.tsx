import { useEffect, useState } from 'react'
import Map,{ Source, Layer, GeolocateControl } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';

import { defaultTheme } from '../../../../styles/themes/default';

import { MapContainer } from "./styles";
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

interface MapOfFlyProps {
    centerPoint:{
        lat:number,
        lng:number,
    },
    points:[number,number][],
}

export function MapOfFly(props:MapOfFlyProps) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <MapContainer>
            {!loading && (
                <Map
                    mapLib={mapboxgl}
                    initialViewState={{
                        latitude: props.centerPoint.lat,
                        longitude: props.centerPoint.lng,
                        zoom: 14
                    }}
                    style={{ width:'31rem',minWidth: '25rem', height: '31rem', display: 'block' }}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxAccessToken={MAPBOX_TOKEN}
                >
                    <GeolocateControl/>
                    <Source id="polyline" type="geojson" data={{
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates:   [
                                [-46.656636,-23.626485],
                                [-46.648412,-23.638011],
                                [-43.162923,-22.927048],
                                [-43.163588, -22.910169]
                            ]
                        }
                    }}>
                        <Layer
                            id="polyline"
                            type="line"
                            source="polyline"
                            layout={{
                                'line-join': 'round',
                                'line-cap': 'round'
                            }}
                            paint={{
                                'line-color': defaultTheme['line'],
                                'line-width': 8
                            }}
                        />
                    </Source>
                </Map >
            )}
        </MapContainer>
    );
}