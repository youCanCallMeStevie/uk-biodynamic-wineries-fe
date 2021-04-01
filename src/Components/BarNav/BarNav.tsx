import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { toggleModalActions } from "../../store/actions/modalActions";
import {
  getCurrentUserAction,
  logoutAction,
} from "../../store/actions/userActions";
import Dropdown from "../Dropdown/Dropdown";
import Modal from "../Modal/Modal";
import Toggle from "../Toggle/Toggle";

//styles
import { Avatar, Image } from "../../styles/globalStyles";
import {
  Nav,
  NavBarContainer,
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
import MoonIcon from "../MoonIcon/MoonIcon";
import userReducer from "../../store/reducers/userReducer";

const BarNav = () => {
  // const moonInfo = useSelector((state: RootState) => state.moon.moonInfo);

  // const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const user = useSelector((state: RootState) => state.user);
  const modalStatus = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();

  const loginSection = useMemo(() => {
    if (!user.isLoggedIn) {
      return (
        // <>
        //   {button ? (
        <>
          <NavItemBtn>
            <NavBtnLink to="/">
              <Button
                primary
                onClick={() => dispatch(toggleModalActions(true, "login"))}
              >
                LOGIN
              </Button>
            </NavBtnLink>
          </NavItemBtn>
          <NavItemBtn>
            <NavBtnLink to="/">
              <Button
                primary
                onClick={() => dispatch(toggleModalActions(true, "signup"))}
              >
                SIGN UP
              </Button>
            </NavBtnLink>
          </NavItemBtn>
          {/* </>
          ) : (
            <>
              <NavItemBtn>
                <NavBtnLink to="/">
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
          )} */}
        </>
      );
    } else {
      return (
        <>
          <h5> Hi, {user && user?.profile!.name}!</h5>
          <Avatar onClick={() => setShowDropdown(!showDropdown)}>
            <Image
              src={user && user?.profile!.imageUrl}
              alt="Profil picture of logged in user"
            />
          </Avatar>
          {showDropdown && <Dropdown menu={"user"} user={user} />}
          <NavBtnLink to="/">
            <Button primary onClick={() => dispatch(logoutAction())}>
              LOG OUT
            </Button>
          </NavBtnLink>
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
              <>
                <MoonIcon />
              </>
              LunaVines
            </NavLogo>
            <HamburgerIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </HamburgerIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Vineyards</NavLinks>
                {/* <NavLinks to="/">Calender</NavLinks> */}
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
              <Toggle />
            </NavMenu>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
      {modal}
    </>
  );
};

export default BarNav;
