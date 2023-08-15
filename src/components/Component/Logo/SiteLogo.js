import logo from "../../../assets/images/logo/BrainFlix-logo.svg";
const SiteLogo = ({ handleClick }) => {
  return (
    <span className="site-logo">
      <img
        src={logo}
        alt="Brain Flix"
        className="site-logo__image"
        onClick={handleClick}
      />
    </span>
  );
};

export default SiteLogo;
