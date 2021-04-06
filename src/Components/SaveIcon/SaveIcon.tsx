import { BsBookmarkFill, BsBookmarkPlus } from "react-icons/bs";

import React, { useState, useEffect } from "react";
import {
  followAVineyard,
  unfollowAVineyard,
} from "../../utils/Api/vineyardApi";
import { VineyardData, VineyardInfo } from "../../store/types";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function SaveIcon() {
  const [follow, setFollow] = useState(false);
  console.log("follow", follow);
  const result: string[] = [];
  const [vineyardsFollow, setVineyardsFollow] = useState(result);

  const userProfile = useSelector((state: RootState) => state.user?.profile);
  console.log("user>>", userProfile);
  const params = useParams();
  const { vineyardId }: any = params;

  useEffect(() => {
    isFollow();
  }, [setFollow]);

  //   const isFollow = async () => {
  //     const follow =
  //       userProfile!.likedVineyards &&
  //       userProfile!.likedVineyards.some(
  //         (vineyard: unknown) => (vineyard as VineyardInfo)?._id === vineyardId
  //       );
  //     setFollow(follow);
  //   };
  const isFollow = async () => {
    const follow =
      userProfile!.likedVineyards &&
      userProfile!.likedVineyards.some(
        (vineyard: any) => vineyard._id === vineyardId
      );
    setFollow(follow);
  };

  const handleFollow = async () => {
    if (follow) {
      console.log("HF vineyardId", vineyardId);
      await unfollowAVineyard(vineyardId);
      const newArray = vineyardsFollow.filter(
        (vineyard: any) => vineyard?._id !== vineyardId
      );
      setVineyardsFollow(newArray);
      setFollow(!follow);
    } else {
      await followAVineyard(vineyardId);
      setVineyardsFollow([...vineyardsFollow, vineyardId]);
    }
    setFollow(!follow);
  };

  const SavIconWrapper = styled.div`
    margin-right: 0.25em;
    font-size: 35px;
    background: transparent;
    position: absolute;
    top: 150px;
    left: 35%;
    color: orange;
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
