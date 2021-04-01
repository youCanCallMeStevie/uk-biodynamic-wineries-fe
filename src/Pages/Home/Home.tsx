import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { LargeSearch, SmallSearch } from "./Home.elements";
import { InfoBanner, Map, BioDays, Search } from "../../Components";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";
function Home() {
  const details = useSelector((state: RootState) => state.vineyard);
  const moonInfo = useSelector((state: RootState) => state.moon.moonInfo);
  const position = useSelector((state: RootState) => state.map.position);

  console.log({ data: details.data });
  return (
    <>
      <LargeSearch>
        <Search moonInfo={moonInfo} />
      </LargeSearch>
      <Map data={details.data} moonInfo={moonInfo} position={position} />
      <SmallSearch>
        <Search moonInfo={moonInfo} />
      </SmallSearch>
      <InfoBanner {...homeObjOne} moonInfo={moonInfo} />
      <BioDays />
      <InfoBanner {...homeObjTwo(moonInfo)} moonInfo={moonInfo} />
      <InfoBanner {...homeObjThree} moonInfo={moonInfo} />
    </>
  );
}

export default Home;
