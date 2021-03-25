import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// const position = [51.505, -0.09]
import { VineyardData, VineyardDispatchTypes } from "../../store/types";
import { Icon } from "leaflet";
import "./Map.css";

const customIcon = new Icon({
  iconUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiafWmfX0vIJshHbXJL59xjQxGrHJd6smlxh1Sg2ybkOcjpmYyg07aUYcrybac1YlgAfo&usqp=CAU`,
  iconSize: [25, 25],
});
interface VineyardProps {
  data: VineyardData;
}

function Map({ data }: VineyardProps) {
  // onClick: (param: any) => any)
  const [activeVineyard, setActiveVineyard] = useState({});
  console.log("data", data.vineyards);
  return (
    <div className="leaflet-container">
      <MapContainer center={[51.75, -1.2742]} zoom={8} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.vineyards.map(vineyard => (
          <Marker
            // image={vineyard.images[0]}
            key={vineyard._id}
            icon={customIcon}
            position={[vineyard.details.latitude, vineyard.details.longitude]}
          >
            <Popup>
              {vineyard.name}
              <br /> {vineyard.bio}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="hero-text">
        go<br></br>near
      </div>
    </div>
  );
}
export default Map;
