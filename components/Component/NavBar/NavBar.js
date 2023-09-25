import { useNavigate } from "react-router-dom";
import SiteLogo from "../Logo/SiteLogo";
import uploadIcon from "../../../assets/images/icons/upload.svg";
import searchIcon from "../../../assets/images/icons/search.svg";
import Avatar from "../UI/Avatar";
import Button from "../UI/Button";
import InputBox from "../UI/InputBox";
import avatarImg from "../../../assets/images/Mohan-muruge.jpg";
import "./NavBar.scss";

const NavBar = ({ userAvatar, userName }) => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <SiteLogo handleClick={() => navigate("../")} />
      <div className="navbar__search">
        <span className="navbar__search-box">
          <InputBox placeholder={"Search"} iconSource={searchIcon} />
        </span>
        <Avatar userName={userName} avatarSource={userAvatar} />
      </div>

      <Button
        buttonText="Upload"
        iconSource={uploadIcon}
        handleClick={() => navigate("../upload")}
      />
      <Avatar userName={userName} avatarSource={avatarImg} />
    </div>
  );
};

export default NavBar;
