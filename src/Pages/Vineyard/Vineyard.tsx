import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

import { Container } from "../../styles/globalStyles";
import { useParams } from "react-router-dom";
import { getOneVineyardAction } from "../../store/actions/vineyardActions";

const mapMarker = require("../../assets/illustrations/maps_marker.svg");
const customIcon = new Icon({
  iconUrl: mapMarker.default,
  iconSize: [45, 45],
});

function Vineyard() {
  const details = useSelector((state: RootState) => state.vineyard.data);
  const moonInfo = useSelector((state: RootState) => state.moon.moonInfo);
  const position = useSelector((state: RootState) => state.map.position);
  const [follow, setFollow] = useState(false);

  const params = useParams();
  const dispatch = useDispatch();
  console.log("params", params);
  const { vineyardId }: any = params;
  console.log("vineyardId", vineyardId);

  useEffect(() => {
    dispatch(getOneVineyardAction(vineyardId));
  }, [vineyardId]);

  console.log("details", details?.vineyards);
  return (
    <>
      {/* 
       && (
        <MapContainer
          center={[
            details?.vineyards[0]?.details.latitude,
            details?.vineyards[0]?.details.longitude,
          ]}
          zoom={8}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker
            key={details?.vineyards[0]._id}
            icon={customIcon}
            position={[
              details?.vineyards[0].details?.latitude,
              details?.vineyards[0].details?.longitude,
            ]}
          ></Marker>
        </MapContainer>
      )} */}
      {details?.vineyards && details?.vineyards[0] && (
        <>
          <h1>{details?.vineyards.name}</h1>
          <p>{details?.vineyards.address.city}</p>
          <p>{details?.vineyards.bio}</p>
        </>
      )}
    </>
  );
}

export default Vineyard;
