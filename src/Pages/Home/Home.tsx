import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { InfoBanner, Map, BioDays, Loader } from "../../Components";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";
function Home() {
  const details = useSelector((state: RootState) => state.vineyard);
  const moonInfo = useSelector((state: RootState) => state.moon.moonInfo);

  const mapIssue = useMemo(() => {
    if (details.loading) {
      return <Loader />;
    } else {
      return <Map data={details.data} moonInfo={moonInfo} />;
    }
  }, [details]);

  return (
    <>
      {/* {details!.vineyards &&  */}
      {/* {mapIssue} */}
      <Map data={details.data} moonInfo={moonInfo} />
      <InfoBanner {...homeObjOne} moonInfo={moonInfo} />
      <BioDays />
      <InfoBanner {...homeObjTwo(moonInfo)} moonInfo={moonInfo} />
      <InfoBanner {...homeObjThree} moonInfo={moonInfo} />
    </>
  );
}

export default Home;
