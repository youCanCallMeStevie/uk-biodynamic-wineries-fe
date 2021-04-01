import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { LargeSearch, SmallSearch, SmallScreenWrapper } from "./Home.elements";
import { InfoBanner, Map, BioDays, Search } from "../../Components";
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
      <LargeSearch>
        <Search moonInfo={moonInfo} />
      </LargeSearch>
      {/* <SmallScreenWrapper>
        <Container> */}
      <SmallSearch>
        <Search moonInfo={moonInfo} />
      </SmallSearch>
      <Map data={details.data} moonInfo={moonInfo} position={position} />
      {/* </Container>
      </SmallScreenWrapper> */}
      <InfoBanner {...homeObjOne} moonInfo={moonInfo} />
      <BioDays />
      <InfoBanner {...homeObjTwo(moonInfo)} moonInfo={moonInfo} />
      <InfoBanner {...homeObjThree} moonInfo={moonInfo} />
    </>
  );
}

export default Home;
