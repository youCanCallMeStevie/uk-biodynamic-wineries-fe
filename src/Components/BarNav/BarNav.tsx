import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

import { toggleModalActions } from "../../store/actions/modalActions";
import { getCurrentUserAction } from "../../store/actions/userActions";
import Dropdown from "../Dropdown/Dropdown";
import Modal from "../Modal/Modal";

//styles
import { Avatar, Image } from "../../styles/globalStyles";
import {
  Nav,
  NavBarContainer,
  NavIcon,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
  HamburgerIcon,
} from "./barnav.elements";
import { Button } from "../../styles/globalStyles";
//icons
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const BarNav = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const user = useSelector((state: RootState) => state.user);
  const modalStatus = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();

  const loginSection = useMemo(() => {
    if (!user.isLoggedIn) {
      return (
        <>
          {button ? (
            <>
              <NavItemBtn>
                <NavBtnLink to="/signin">
                  <Button
                    primary
                    onClick={() => dispatch(toggleModalActions(true, "login"))}
                  >
                    LOGIN
                  </Button>
                </NavBtnLink>
              </NavItemBtn>
              <NavItemBtn>
                <NavBtnLink to="/register">
                  <Button
                    primary
                    onClick={() => dispatch(toggleModalActions(true, "signup"))}
                  >
                    SIGN UP
                  </Button>
                </NavBtnLink>
              </NavItemBtn>
            </>
          ) : (
            <>
              <NavItemBtn>
                <NavBtnLink to="/signin">
                  <Button
                    fontBig
                    primary
                    onClick={() => dispatch(toggleModalActions(true, "login"))}
                  >
                    LOGIN
                  </Button>
                </NavBtnLink>
              </NavItemBtn>
              <NavItemBtn>
                <NavBtnLink to="/register">
                  <Button
                    fontBig
                    primary
                    onClick={() => dispatch(toggleModalActions(true, "signup"))}
                  >
                    SIGN UP
                  </Button>
                </NavBtnLink>
              </NavItemBtn>
            </>
          )}
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

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    dispatch(getCurrentUserAction());
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#f3f4ed" }}>
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
