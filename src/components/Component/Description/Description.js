import Divider from "../UI/Divider";
import StatSection from "../StatSection";
import "./Description.scss";

const Description = ({ videoContent }) => {
  const { title, description } = videoContent;
  return (
    <section className="video-description">
      <h1 className="video-description__title">{title}</h1>
      <span className="hidden--tablet">
        <Divider />
      </span>
      <StatSection mediaObject={videoContent} />
      <Divider />
      <p className="video-description__text">{description}</p>
    </section>
  );
};

export default Description;
