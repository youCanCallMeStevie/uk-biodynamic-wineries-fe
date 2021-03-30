import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { InfoBanner, Map, BioDays } from "../../Components";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";

function Home() {
  const details = useSelector((state: RootState) => state.vineyard.data);
  const moonInfo = useSelector((state: RootState) => state.moon.moonInfo);
  return (
    <>
      {details!.vineyards && <Map data={details} moonInfo={moonInfo} />}
      <InfoBanner {...homeObjOne} moonInfo={moonInfo} />
      <BioDays />
      <InfoBanner {...homeObjTwo(moonInfo)} moonInfo={moonInfo} />
      <InfoBanner {...homeObjThree} moonInfo={moonInfo} />
    </>
  );
}

export default Home;
