import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Map from "../../Components/Map/Map";
import { RootState } from "../../store";
import { InfoBanner } from "../../Components";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";
import photo from "../../assets/illustrations/moon_only.svg"

function Home() {
  const details = useSelector((state: RootState) => state.vineyard.data);

  return (
    <>
      {details!.vineyards && <Map data={details} />}
      <InfoBanner {...homeObjOne} />
      <InfoBanner {...homeObjTwo} />
      <InfoBanner {...homeObjThree} />

    </>
  );
}

export default Home;
