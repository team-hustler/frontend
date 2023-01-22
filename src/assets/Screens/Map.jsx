import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
const Map = () => {
  return (
    <div className="h-full  w-full">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="http://124.41.236.136/geoserver/gwc/service/tms/1.0.0/GalliMaps%3AGalliMaps@EPSG%3A3857@png?authkey=61f40b24-8281-11ed-b9f29f2"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
