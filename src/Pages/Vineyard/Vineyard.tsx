import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import {
  InfoBanner,
  Map,
  Summary,
  SaveIcon,
  DateSearch,
} from "../../Components";
import { vineyardObjOne, vineyardObjTwo, vineyardObjThree } from "./Data";
import { useParams } from "react-router-dom";
import { getOneVineyardAction } from "../../store/actions/vineyardActions";

function Vineyard() {
  const params = useParams();
  const dispatch = useDispatch();
  const { vineyardId }: any = params;
  const details = useSelector((state: RootState) => state.vineyard.data);
  const moonInfo = useSelector((state: RootState) => state.moon.moonInfo);
  const position = useSelector((state: RootState) => state.map.position);

  useEffect(() => {
    dispatch(getOneVineyardAction(vineyardId));
  }, [vineyardId]);

  console.log("details", details);
  return (
    <>
      <InfoBanner {...vineyardObjOne(details)} details={details} />
      <Map data={details} moonInfo={moonInfo} position={position} />
      <InfoBanner {...vineyardObjTwo(details)} details={details} />
      <Summary {...vineyardObjThree(details)} details={details} />
    </>
  );
}

export default Vineyard;
