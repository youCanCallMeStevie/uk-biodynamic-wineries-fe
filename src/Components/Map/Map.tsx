import React, { useState, useEffect, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Button, Container } from "../../styles/globalStyles";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { VineyardData, MoonData } from "../../store/types";
import { Icon } from "leaflet";
import {
  MapSec,
  MapSecContainer,
  ButtonWrapper,
  HeadingWrapper,
  DayHeading,
} from "./Map.elements";

const mapMarker = require("../../assets/illustrations/maps_marker.svg");

const customIcon = new Icon({
  iconUrl: mapMarker.default,
  iconSize: [45, 45],
});

interface MapProps {
  data: VineyardData | null;
  moonInfo: MoonData | null;
}
function Map({ data, moonInfo }: MapProps, { primary }: any) {
  console.log("moonInfo", moonInfo);
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
            <HeadingWrapper>
          <DayHeading>Today is: A {moonInfo?.bioDay} Day</DayHeading>
          </HeadingWrapper>
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
