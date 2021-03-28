import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

import { toggleModalActions } from "../../store/actions/modalActions";
import { getCurrentUserAction } from "../../store/actions/userActions";
import Dropdown from "../Dropdown/Dropdown";
import Modal from "../Modal/Modal";

//stles
import { Avatar, Image } from "../../styles/globalStyles";
import {
  Nav,
  NavBarContainer,
  NavIcon,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  HamburgerIcon,
} from "./barnav.elements";

//icons
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const BarNav = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [click, setClick] = useState(false);
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
          <NavItem>
            <NavLinks to="/signin">
              <span onClick={() => dispatch(toggleModalActions(true, "login"))}>
                Sign In
              </span>
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/register">
              <span
                onClick={() => dispatch(toggleModalActions(true, "signup"))}
              >
                Sign Up
              </span>
            </NavLinks>
          </NavItem>
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

  const handleClick = () => setClick(!click);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavBarContainer>
            <NavLogo to="/">
              <NavIcon />
              UK Bio
            </NavLogo>
            <HamburgerIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </HamburgerIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              {/* <NavItem>
                <NavLinks to="/profile">
                  {user.isLoggedIn && (
                    <Avatar>
                      <Image
                        src={user.profile!.imageUrl}
                        alt="Profile picture of logged in user"
                      />
                    </Avatar>
                  )}
                </NavLinks>
              </NavItem> */}
              {loginSection}
            </NavMenu>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
      {modal}
    </>
  );
};

export default BarNav;
