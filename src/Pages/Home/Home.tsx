import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { LargeSearch, SmallSearch, SmallScreenWrapper } from "./Home.elements";
import { InfoBanner, Map, BioDays, Search, Loader } from "../../Components";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";
import { Container } from "../../styles/globalStyles";
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
      {/* <SmallScreenWrapper>
        <Container> */}
      <SmallSearch>
        <Search moonInfo={moonInfo} data={details.data} />
      </SmallSearch>
      {/* </Container>
      </SmallScreenWrapper> */}
      <InfoBanner {...homeObjOne} />
      <BioDays />
      <InfoBanner {...homeObjTwo(moonInfo)} moonInfo={moonInfo} />
      <InfoBanner {...homeObjThree} />
    </>
  );
}

export default Home;
