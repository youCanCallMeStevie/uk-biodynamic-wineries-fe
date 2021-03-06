import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { InfoBanner, Map, IconBanner } from "../../Components";
import { vineyardObjOne, vineyardObjTwo, vineyardObjThree } from "./Data";
import { useParams } from "react-router-dom";
import { getOneVineyardAction } from "../../store/actions/vineyardActions";

function Vineyard() {
  const params = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state: RootState) => state.vineyard.data);
  const moonInfo = useSelector((state: RootState) => state.moon.moonInfo);
  const position = useSelector((state: RootState) => state.map.position);
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const { vineyardId }: any = params;

  useEffect(() => {
    dispatch(getOneVineyardAction(vineyardId));
  }, [vineyardId, isLoggedIn]);

  return (
    <>
      <InfoBanner {...vineyardObjOne(details)} details={details} />
      <Map data={details} moonInfo={moonInfo} position={position} />
      <IconBanner details={details} />
      <InfoBanner {...vineyardObjTwo(details)} details={details} />
      <InfoBanner {...vineyardObjThree(details)} details={details} />
    </>
  );
}

export default Vineyard;
