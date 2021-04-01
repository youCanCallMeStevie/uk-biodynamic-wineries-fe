import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container } from "../../styles/globalStyles";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { VineyardData, MoonData, MapData } from "../../store/types";
import { RootState } from "../../store";
import { Icon } from "leaflet";
import {
  MapSec,
  MapSecContainer,
  ButtonWrapper,
  HeadingWrapper,
  DayHeading,
} from "./Map.elements";
import Search from "../Search/Search";

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
  const [map, setMap] = useState(null);
  const mapResults = useMemo(() => {
    return (
      data &&
      data.vineyards &&
      data.vineyards.map(vineyard => (
        <Marker
          key={vineyard._id}
          icon={customIcon}
          position={[vineyard.details.latitude, vineyard.details.longitude]}
        >
          <Popup>
            {vineyard.name}
            <br /> {vineyard.bio}
          </Popup>
        </Marker>
      ))
    );
  }, [data]);

  // useEffect(() => {
  //   map && map!.flyto(center, zoom);
  // }, [center, zoom]);

  return (
    <>
      <MapSec>
        <MapSecContainer>
          <MapContainer
            // whenCreated={setMap}
            center={[51.4, -1.3638]}
            zoom={8}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {mapResults}
          </MapContainer>
          <Container>
            <HeadingWrapper>
              <DayHeading>Today is: A {moonInfo?.bioDay} Day</DayHeading>
            </HeadingWrapper>
            {/* <ButtonWrapper>
              <Search data={data} />
            </ButtonWrapper> */}
          </Container>
        </MapSecContainer>
      </MapSec>
    </>
  );
}
export default Map;
