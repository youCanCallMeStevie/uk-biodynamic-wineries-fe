import { BsBookmarkFill, BsBookmarkPlus } from "react-icons/bs";

import React, { useState, useEffect } from "react";
import {
  followAVineyard,
  unfollowAVineyard,
} from "../../utils/Api/vineyardApi";
import {
  followVineyardAction,
  unfollowVineyardAction,
} from "../../store/actions/vineyardActions";
import { VineyardData, VineyardInfo } from "../../store/types";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function SaveIcon() {
  const params = useParams();
  const dispatch = useDispatch();

  const result: string[] = [];
  const [vineyardsFollow, setVineyardsFollow] = useState(result);
  const [follow, setFollow] = useState(false);

  const userProfile = useSelector((state: RootState) => state.user?.profile);
  const { vineyardId }: any = params;

  useEffect(() => {
    isFollow();
  }, [setFollow]);

  const isFollow = async () => {
    const follow =
      userProfile!.likedVineyards &&
      userProfile!.likedVineyards.some(
        (vineyard: any) => vineyard._id === vineyardId
      );
    if (follow !== undefined) {
      setFollow(follow);
    }
  };
  const handleFollow = async () => {
    if (follow) {
      await dispatch(unfollowVineyardAction(vineyardId));
      const newArray = vineyardsFollow.filter(
        (vineyard: any) => vineyard?._id !== vineyardId
      );
      setVineyardsFollow(newArray);
      setFollow(!follow);
    } else {
      await dispatch(followVineyardAction(vineyardId));
      setVineyardsFollow([...vineyardsFollow, vineyardId]);
    }
    setFollow(!follow);
  };

  const SavIconWrapper = styled.div`
    margin-left: 0.5em;
    margin-top: -0.25em;
    font-size: 35px;
    color: orange;
    cursor: pointer;
  `;
  return (
    <>
      {!follow ? (
        <SavIconWrapper onClick={() => handleFollow()}>
          <BsBookmarkPlus />
        </SavIconWrapper>
      ) : (
        <SavIconWrapper onClick={() => handleFollow()}>
          <BsBookmarkFill />
        </SavIconWrapper>
      )}
    </>
  );
}

export default SaveIcon;
