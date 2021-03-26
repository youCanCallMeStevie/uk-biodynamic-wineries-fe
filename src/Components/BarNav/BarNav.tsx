import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Avatar, Image } from "../../styles/uiKits";
import { NavBar } from "./barnav.elements";
import { toggleModalActions } from "../../store/actions/modalActions";
import { getCurrentUserAction } from "../../store/actions/userActions";
import Dropdown from "../Dropdown/Dropdown";
import Modal from "../Modal/Modal";

const BarNav = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const modalStatus = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserAction());
  }, []);

  const loginSection = useMemo(() => {
    if (!user.isLoggedIn) {
      return (
        <>
          <span onClick={() => dispatch(toggleModalActions(true, "login"))}>
            Sign In
          </span>
          <span onClick={() => dispatch(toggleModalActions(true, "signup"))}>
            Sign Up
          </span>
        </>
      );
    } else {
      return (
        <>
          <h4> Hi {user.profile!.name}</h4>
          <Avatar onClick={() => setShowDropdown(!showDropdown)}>
            <Image
              src={user.profile!.imageUrl}
              alt="Profil picture of logged in user"
            />
          </Avatar>
          {showDropdown && <Dropdown menu={"user"} user={user} />}
        </>
      );
    }
  }, [user, showDropdown]);

  const modal = useMemo(() => modalStatus && <Modal />, [
    modalStatus,
    dispatch,
  ]);

  return (
    <>
      <NavBar>
        {user.isLoggedIn && (
          <Avatar>
            <Image
              src={user.profile!.imageUrl}
              alt="Profile picture of logged in user"
            />
          </Avatar>
        )}
        {loginSection}
      </NavBar>
      {modal}
    </>
  );
};

export default BarNav;
