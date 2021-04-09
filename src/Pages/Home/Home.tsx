import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { LargeSearch, SmallSearch } from "../../styles/globalStyles";
import { InfoBanner, Map, BioDays, Search } from "../../Components";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";
import {
  getVineyardAction,
  setLoading,
} from "../../store/actions/vineyardActions";
import { fetchTodaysMoonAction } from "../../store/actions/moonActions";
import { getCurrentUserAction } from "../../store/actions/userActions";

function Home() {
  const details = useSelector((state: RootState) => state.vineyard);
  const moonInfo = useSelector((state: RootState) => state.moon.moonInfo);
  const position = useSelector((state: RootState) => state.map.position);
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getVineyardAction());
  // }, [isLoggedIn]);

  // useEffect(() => {
  //   dispatch(setLoading());
  //   dispatch(getVineyardAction());
  //   dispatch(fetchTodaysMoonAction());
  // }, [dispatch]);

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
