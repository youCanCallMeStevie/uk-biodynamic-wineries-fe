import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { VineyardData, MoonData, MapData } from "../../store/types";
import { Icon } from "leaflet";
import {
  MapSec,
  MapSecContainer,
  PopupImg,
  PopupWrapper,
  PopupCol,
  PopupLink,
} from "./Map.elements";
import { Map as LeafletMap } from "leaflet";
import { Link } from "react-router-dom";
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
                    <PopupLink to={`/vineyard/${vineyard._id}`}>
                      <PopupWrapper>
                        <PopupCol>
                          <h3>{vineyard.name}</h3>
                          <p>{vineyard.bio}</p>
                        </PopupCol>
                        <PopupCol>
                          <PopupImg src={vineyard.images[2]} />
                        </PopupCol>
                      </PopupWrapper>
                    </PopupLink>
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
