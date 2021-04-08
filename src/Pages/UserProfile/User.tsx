import React, { useState, useEffect } from "react";
import {} from "./User.elements";
import { RootState } from "../../store";
import { InfoBanner, Toggle } from "../../Components";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Image, Avatar } from "../../styles/globalStyles";
import { useParams, Link } from "react-router-dom";

import {
  InfoSec,
  InfoRow,
  InfoCol,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./User.elements";
import {
  getCurrentUserAction,
  editProfileAction,
  deleteProfileAction,
  changeProfilePictureAction,
  getSelectedUserProfile,
} from "../../store/actions/userActions";
// import { fetchSavedVineyardsAction } from "../../store/actions/userActions";

function User() {
  const user = useSelector((state: RootState) => state.user.profile);
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  // const params = useParams();
  // console.log("params", params);

  return (
    <>
      <InfoSec>
        <Container>
          <InfoRow>
            <ImgWrapper>
              <Img
                src={user && user?.imageUrl}
                alt={`${user && user?.name}'s profile picture`}
              />
            </ImgWrapper>
            <InfoCol>
              <TextWrapper>
                <TopLine>@{user && user?.username}'s following</TopLine>
                {user &&
                  user?.likedVineyards.length > 0 &&
                  user?.likedVineyards.map(likedVineyard => (
                    <Link to={`/vineyard/${likedVineyard?._id}`}>
                      <Subtitle>{likedVineyard?.name}</Subtitle>
                    </Link>
                  ))}
                <Subtitle>{user?.email}</Subtitle>
                <Subtitle>
                  {user?.name}
                  {user?.lastname}
                </Subtitle>
                <Subtitle>
                  Public profile <Toggle /> {user?.publicProfile}
                </Subtitle>
                <Heading></Heading>
              </TextWrapper>
            </InfoCol>
            <InfoCol></InfoCol>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default User;
