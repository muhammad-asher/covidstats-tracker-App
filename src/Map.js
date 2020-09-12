import React from "react";
import "./Map.css";
import { showDataOnMap } from "./util";
import { Map as LeafletMap, TileLayer } from "react-leaflet";

function Map({ countries, casesType, center, zoom }) {
	return (
		<div className="map">
			<LeafletMap center={center} zoom={zoom}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://github.com/muhammad-asher">Github Link</a>'
				/>
				{showDataOnMap(countries, casesType)}
			</LeafletMap>
		</div>
	);
}

export default Map;
