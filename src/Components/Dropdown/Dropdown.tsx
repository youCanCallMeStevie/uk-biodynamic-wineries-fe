import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { UserState } from "../../store/types";
import { Avatar, Image, Button, Divider } from "../../styles/globalStyles";
import { useDispatch } from "react-redux";
import { DropdownContainer, Subtitle } from "./Dropdown.elements";
import { logoutAction } from "../../store/actions/userActions";
import { useHistory } from "react-router-dom";

interface DropdownProps {
  menu: string;
  user: UserState;
}
export default function Dropdown({ menu, user }: DropdownProps) {
  const dispatch = useDispatch();
  const history = useHistory();
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
            <Subtitle>
              Hi, {user && user?.profile && user?.profile!.name}!
            </Subtitle>
            <Divider />
            <Link to="/me">
              {" "}
              <Button>VIEW/EDIT PROFILE</Button>{" "}
            </Link>
            <Button
              primary
              onClick={() => dispatch(logoutAction()) && history.push("/")}
            >
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
            <Subtitle>Saved Vineyards</Subtitle>
            <Subtitle>Reviews</Subtitle>
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
      {/* <Tab /> */}
      <DropdownContainer>{dropDownMenu}</DropdownContainer>
    </>
  );
}
