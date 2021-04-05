import React, { useState, useEffect } from "react";
import {} from "./User.elements";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentUserAction,
  editProfileAction,
  deleteProfileAction,
  changeProfilePictureAction,
  getSelectedUserProfile,
} from "../../store/actions/userActions";
import { fetchSavedVineyardsAction } from "../../store/actions/vineyardActions";
function User() {
  const params = useParams();

  // const getSelectedProfile = useCallback(() => {
  //   dispatch(getSelectedUserProfile(params.id));
  //   dispatch(getUsersPostAction(params.id));
  //   {
  //     state.currentUser.selectedUser.user &&
  //       setProfile({
  //         username: state.currentUser.selectedUser.user.username,
  //         name: state.currentUser.selectedUser.user.name,
  //         lastname: state.currentUser.selectedUser.user.lastname,
  //         bio: state.currentUser.selectedUser.user.bio,
  //         followers: state.currentUser.selectedUser.user.followers,
  //         following: state.currentUser.selectedUser.user.following,
  //         imageUrl: state.currentUser.selectedUser.user.imageUrl,
  //       });
  //   }
  // }, [
  //   params,
  //   state.currentUser.selectedUser?.user?._id,
  //   state.currentUser.user?.currentUser?._id,
  // ]);

  // const getCurrentUserProfile = useCallback(() => {
  //   dispatch(getCurrentUserPostsAction());
  //   dispatch(getUsersPostAction(params.id));

  //   {
  //     state.currentUser.user.currentUser &&
  //       setProfile({
  //         username: state.currentUser.user.currentUser.username,
  //         name: state.currentUser.user.currentUser.name,
  //         lastname: state.currentUser.user.currentUser.lastname,
  //         bio: state.currentUser.user.currentUser.bio,
  //         followers: state.currentUser.user.currentUser.followers,
  //         following: state.currentUser.user.currentUser.following,
  //         imageUrl: state.currentUser.user.currentUser.imageUrl,
  //       });
  //   }
  // }, [
  //   params,
  //   state.currentUser.user?.currentUser?._id,
  //   state.currentUser.selectedUser?.user?._id,
  // ]);
  return <div>HELLLO MEEEEE</div>;
}

export default User;
