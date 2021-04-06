import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { LargeSearch, SmallSearch } from "../../styles/globalStyles";
import { InfoBanner, Map, BioDays, Search } from "../../Components";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";
function Home() {
  const details = useSelector((state: RootState) => state.vineyard);
  const moonInfo = useSelector((state: RootState) => state.moon.moonInfo);
  const position = useSelector((state: RootState) => state.map.position);

  console.log({ data: details.data });
  return (
    <>
      {" "}
      <Map data={details.data} moonInfo={moonInfo} position={position} />
      <LargeSearch>
        <Search moonInfo={moonInfo} data={details.data} />
      </LargeSearch>
      <SmallSearch>
        <Search moonInfo={moonInfo} data={details.data} />
      </SmallSearch>
      <InfoBanner {...homeObjOne} />
      <BioDays />
      <InfoBanner {...homeObjTwo(moonInfo)} moonInfo={moonInfo} />
      <InfoBanner {...homeObjThree} />
    </>
  );
}

/**
 *
 * useCallback && useMemo  [ title , location ]
 * useMemo for display demo [ title , location ]
 */

export default Home;

/**
 *  Redux
 *  Container
 *
 *   VineYardListing
 *    List
 */
