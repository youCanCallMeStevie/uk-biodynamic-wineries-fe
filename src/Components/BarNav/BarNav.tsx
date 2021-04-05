import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { toggleModalActions } from "../../store/actions/modalActions";
import {
  getCurrentUserAction,
  logoutAction,
} from "../../store/actions/userActions";
import { Dropdown, Modal, Toggle } from "../index";

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

const BarNav = () => {
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
        </>
      );
    } else {
      return (
        <>
          <h5 onClick={() => setShowDropdown(!showDropdown)}>
            {" "}
            Hi, {user && user?.profile!.name}!
          </h5>
          <Avatar onClick={() => setShowDropdown(!showDropdown)}>
            <Image
              src={user && user?.profile!.imageUrl}
              alt="Profil picture of logged in user"
            />
          </Avatar>

          {showDropdown && <Dropdown menu={"user"} user={user} />}
          <Button primary onClick={() => dispatch(logoutAction())}>
            LOG OUT
          </Button>
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
              </NavItem>
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
