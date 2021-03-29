import React, { useState } from "react";
import { Button, Container } from "../../styles/globalStyles";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// const position = [51.505, -0.09]
import { VineyardData, VineyardDispatchTypes } from "../../store/types";
import { Icon } from "leaflet";
import { MapSec, MapSecContainer, ButtonWrapper } from "./Map.elements";

const customIcon = new Icon({
  iconUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiafWmfX0vIJshHbXJL59xjQxGrHJd6smlxh1Sg2ybkOcjpmYyg07aUYcrybac1YlgAfo&usqp=CAU`,
  iconSize: [25, 25],
});
interface VineyardProps {
  data: VineyardData | null;
}

function Map({ data }: VineyardProps, {primary}:any) {
  // onClick: (param: any) => any)
  const [activeVineyard, setActiveVineyard] = useState({});
  console.log("data", data!.vineyards);
  return (
    <>
      <MapSec>
        <MapSecContainer>
          <MapContainer
            center={[51.75, -1.2742]}
            zoom={9}
            scrollWheelZoom={false}
          >
            <Container>
            <ButtonWrapper>
            <Button big fontBig primary={primary}>Find a Biodynamic Vineyard</Button>
            </ButtonWrapper>
            </Container>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data!.vineyards.map(vineyard => (
              <Marker
                // image={vineyard.images[0]}
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
