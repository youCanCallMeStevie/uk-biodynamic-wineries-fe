import React, {useMemo} from "react";
import { Link } from "react-router-dom";
import { UserState } from "../../store/types";
import { Avatar, Image } from "../../styles/uiKits";

interface DropdownProps {
  menu: string;
  user: UserState;
}
export default function Dropdown({ menu, user }: DropdownProps) {
  const dropDownMenu = useMemo(() => {
    switch (menu) {
      case "user":
        return (
          <>
            <Avatar>
              <Image
                src={user.profile!.imageUrl}
                alt="Profil picture of logged in user"
              />
            </Avatar>
            <h4>
              {user.profile!.name} {user.profile!.lastname}
            </h4>
            {/* <Button> View Profile</Button>
  <Divider></Divider> */}
            {/* <dropdown list Logout Refer a Friend */}
          </>
        );
      default:
        return "";
    }
  }, [menu]);
  return <div>{dropDownMenu}</div>;
}
