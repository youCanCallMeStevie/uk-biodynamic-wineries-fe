import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { UserState } from "../../store/types";
import { Avatar, Image, Button } from "../../styles/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { DropdownContainer, Divider, Tab } from "./Dropdown.elements";
import { logoutAction } from "../../store/actions/userActions";
interface DropdownProps {
  menu: string;
  user: UserState;
}
export default function Dropdown({ menu, user }: DropdownProps) {
  const dispatch = useDispatch();

  const dropDownMenu = useMemo(() => {
    switch (menu) {
      case "user":
        return (
          <>
            <Avatar>
              <Image
                src={user.profile!.imageUrl}
                alt="Profile picture of logged in user"
              />
            </Avatar>
            <p>Hi, {user && user?.profile && user?.profile!.name}!</p>
            <Divider />
            <p>Notifications</p>
            <p>Saved Vineyards</p>
            <Link to="/me">
              {" "}
              <Button> View / Edit Profile</Button>{" "}
            </Link>
            <Divider />
            <Button primary onClick={() => dispatch(logoutAction())}>
              LOG OUT
            </Button>
          </>
        );

      case "winery":
        return (
          <>
            <Avatar>
              <Image
                src={user.profile!.imageUrl}
                alt="Profile picture of logged in user"
              />
            </Avatar>
            <p>Saved Vineyards</p>
            <p>Reviews</p>
            <Link to="/me">
              {" "}
              <Button> View / Edit Winery Info</Button>{" "}
            </Link>
            <Divider />
            <Button primary onClick={() => dispatch(logoutAction())}>
              LOG OUT
            </Button>
          </>
        );
      default:
        return "";
    }
  }, [menu]);
  return (
    <>
      <Tab />
      <DropdownContainer>{dropDownMenu}</DropdownContainer>
    </>
  );
}
