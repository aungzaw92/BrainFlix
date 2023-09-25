import Divider from "../UI/Divider";
import StatSection from "../Description/MediaStats";
import "./Description.scss";

const Description = ({ mediaObject }) => {
  const { title, description } = mediaObject;
  return (
    <section className="video-description">
      <h1 className="video-description__title">{title}</h1>
      <span className="hidden--tablet">
        <Divider />
      </span>
      <StatSection mediaObject={mediaObject} />
      <Divider />
      <p className="video-description__text">{description}</p>
    </section>
  );
};

export default Description;
