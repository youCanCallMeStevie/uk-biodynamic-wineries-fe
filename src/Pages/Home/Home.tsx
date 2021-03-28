import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Map from "../../Components/Map/Map";
import { RootState } from "../../store";
import { InfoBanner } from "../../Components";
import { homeObjOne } from "./Data";

function Home() {
  const details = useSelector((state: RootState) => state.vineyard.data);

  return (
    <>
      <InfoBanner {...homeObjOne} />
      {details!.vineyards && <Map data={details} />}
      
    </>
  );
}

export default Home;
