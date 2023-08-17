import React from "react";
import SiteLogo from "../Logo/SiteLogo";
import uploadIcon from "../../../assets/images/icons/upload.svg";
import searchIcon from "../../../assets/images/icons/search.svg";
import Avatar from "../UI/Avatar";
import Button from "../UI/Button";
import InputBox from "../UI/InputBox";

import "./NavBar.scss";

const NavBar = ({ userAvatar, userName }) => {
  return (
    <div className="navbar">
      <SiteLogo />
      <div className="navbar__search">
        <span className="navbar__search-box">
          <InputBox placeholder={"Search"} iconSrc={searchIcon} />
        </span>
        <Avatar userName={userName} avatarSrc={userAvatar} />
      </div>

      <Button text={"Upload"} iconSrc={uploadIcon} />
      <Avatar userName={userName} avatarSrc={userAvatar} />
    </div>
  );
};

export default NavBar;
