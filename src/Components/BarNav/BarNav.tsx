import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getVineyardAction } from "../../store/actions/vineyardActions";
import { toggleModalActions } from "../../store/actions/modalActions";
import { getCurrentUserAction } from "../../store/actions/userActions";
import { Dropdown, Modal, Toggle } from "../index";
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
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { MoonIcon, BioIcon } from "../index";
import { useHistory } from "react-router-dom";
import { logoutAction } from "../../store/actions/userActions";
const BarNav = ({ moonPhase, bioType }: any) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const user = useSelector((state: RootState) => state.user);
  const modalStatus = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      dispatch(logoutAction());
      dispatch(getVineyardAction());
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const loginSection = useMemo(() => {
    if (!user.isLoggedIn) {
      return (
        <>
          <NavItemBtn>
            <NavBtnLink>
              <Button
                primary
                onClick={() => dispatch(toggleModalActions(true, "login"))}
              >
                LOGIN
              </Button>
            </NavBtnLink>
          </NavItemBtn>
          <NavItemBtn>
            <NavBtnLink>
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
          <Avatar onClick={() => setShowDropdown(!showDropdown)}>
            <Image
              src={user && user?.profile && user?.profile!.imageUrl}
              alt={`${
                user && user?.profile && user?.profile!.name
              }'s profile picture`}
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
            <NavLogo to="/" onClick={() => dispatch(getVineyardAction())}>
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
                <NavLinks
                  onClick={() => dispatch(toggleModalActions(true, "moon"))}
                >
                  <MoonIcon /> <p>The moon's {moonPhase}</p>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  onClick={() => dispatch(toggleModalActions(true, "fruit"))}
                >
                  <BioIcon /> <p>Today's a {bioType} Day</p>
                </NavLinks>
              </NavItem>
              {loginSection}
              {window.innerWidth <= 960 && user.isLoggedIn && (
                <Button primary onClick={() => handleLogout()}>
                  LOGOUT{" "}
                </Button>
              )}
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
