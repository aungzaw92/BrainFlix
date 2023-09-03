import { useEffect, useState } from "react";
import eyeballIcon from "../../../assets/images/icons/views.svg";
import heartIcon from "../../../assets/images/icons/likes.svg";
import getFormattedDate from "../../dateFormat";
import IconCounter from "../UI/IconCounter";

import "./MediaStats.scss";

console.log("Aung", getFormattedDate);

const MediaStats = ({ mediaObject }) => {
  const { views, likes, channel, timestamp } = mediaObject;
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    if (timestamp) {
      setFormattedDate(getFormattedDate(timestamp));
    }
  }, [timestamp]);

  return (
    <>
      <div className="media-stats">
        <section className="media-stats__section">
          <h3 className="media-stats__channel">By {channel}</h3>
          <p className="media-stats__date">{formattedDate}</p>
        </section>

        <section className="media-stats__section">
          <IconCounter
            iconSource={eyeballIcon}
            altText={"views"}
            counter={views}
          />
          <IconCounter
            iconSource={heartIcon}
            altText={"likes"}
            counter={likes}
          />
        </section>
      </div>
 
    </>
  );
};

export default MediaStats;
