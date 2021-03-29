import React, { useState } from "react";
import { Button, Container } from "../../styles/globalStyles";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// const position = [51.505, -0.09]
import { VineyardData, VineyardDispatchTypes } from "../../store/types";
import { Icon } from "leaflet";
import { MapSec, MapSecContainer, ButtonWrapper } from "./Map.elements";

let mapMarker = require("../../assets/illustrations/maps_marker.svg");

const customIcon = new Icon({
  iconUrl: mapMarker.default,
  iconSize: [45, 45],
});

interface VineyardProps {
  data: VineyardData | null;
}

function Map({ data }: VineyardProps, { primary }: any) {
  // onClick: (param: any) => any)
  const [activeVineyard, setActiveVineyard] = useState({});
  console.log("data", data!.vineyards);
  return (
    <>
      <MapSec>
        <MapSecContainer>
          <MapContainer
            center={[51.4, -1.3638]}
            zoom={8}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {data!.vineyards.map(vineyard => (
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
          <Container>
            <ButtonWrapper>
              <Button big fontBig primary={primary}>
                Plan Your Visit
              </Button>
            </ButtonWrapper>
          </Container>
        </MapSecContainer>
      </MapSec>
    </>
  );
}
export default Map;
