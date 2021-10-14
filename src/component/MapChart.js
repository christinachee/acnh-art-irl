import React, { useState } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from "react-simple-maps";

import "../styles/MapChart.css";
import { markers_by_location } from "../data";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json";

const MapChart = ({ setTooltipContent, toggleShow, handleLocationData }) => {
    const [scaleFactor, setScaleFactor] = useState(1);
    return (
        <ComposableMap data-tip="">
            <ZoomableGroup onMove={({ k }) => setScaleFactor(k)} maxZoom={30}>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies
                            .map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="#9dffb0"
                                    stroke="#c48d3f"
                                    strokeWidth={1 / scaleFactor}
                                />
                            ))
                    }
                </Geographies>
                {markers_by_location.map(({ city, coordinates, art }) => (
                    <Marker key={city} coordinates={coordinates}>
                        <circle
                            r={2 / scaleFactor}
                            fill="#F00"
                            stroke="#fff"
                            strokeWidth={1 / scaleFactor}
                            onMouseEnter={() => {
                                setTooltipContent(`${city}`);
                            }}
                            onMouseLeave={() => {
                                setTooltipContent("");
                            }}
                            onClick={() => {
                                toggleShow();
                                handleLocationData({ city, coordinates, art })
                            }
                            }
                        />
                    </Marker>
                ))}
            </ZoomableGroup>
        </ComposableMap>
    );
};

export default MapChart;
