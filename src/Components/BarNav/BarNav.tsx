import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Avatar, Image } from "../../styles/uiKits";
import { NavBar } from "./barnav.elements";
import { getCurrentUserAction } from "../../store/actions/userActions";
const BarNav = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const modalStatus = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserAction());
  }, []);

  return (
    <NavBar>
      {user.isLoggedIn && user.profile!.imageUrl && (
        <Avatar>
          <Image
            src={user.profile!.imageUrl}
            alt="Profil picture of logged in user"
          />
        </Avatar>
      )}
    </NavBar>
  );
};

export default BarNav;
