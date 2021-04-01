import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { VineyardData, MoonData, MapData } from "../../store/types";
import { Icon } from "leaflet";
import { MapSec, MapSecContainer } from "./Map.elements";
import { Map as LeafletMap } from "leaflet";

const mapMarker = require("../../assets/illustrations/maps_marker.svg");

const customIcon = new Icon({
  iconUrl: mapMarker.default,
  iconSize: [45, 45],
});

interface MapProps {
  data?: VineyardData;
  moonInfo?: MoonData;
  position?: MapData;
}

function Map({ data, moonInfo, position }: MapProps, { primary }: any) {
  const dispatch = useDispatch();
  const [map, setMap] = useState<LeafletMap | null>(null);
  console.log("data", data);
  useEffect(() => {
    map && position && map.flyTo(position.center, position.zoom);
  }, [position!.center, position!.zoom]);

  return (
    <>
      <MapSec>
        <MapSecContainer>
          <MapContainer
            whenCreated={setMap}
            center={[51.4, -1.3638]}
            zoom={8}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {data &&
              data.vineyards &&
              data.vineyards.map(vineyard => (
                <Marker
                  key={vineyard._id}
                  icon={customIcon}
                  position={[
                    vineyard.details.latitude,
                    vineyard.details.longitude,
                  ]}
                >
                  <Popup>
                    {vineyard.name}
                    <br /> {vineyard.bio}
                  </Popup>
                </Marker>
              ))}
          </MapContainer>
        </MapSecContainer>
      </MapSec>
    </>
  );
}
export default Map;
