import React, { useEffect, useState } from "react";
import eyeballIcon from "../../../assets/images/icons/views.svg";
import heartIcon from "../../../assets/images/icons/likes.svg";
import dateFormat from "../../dateFormat";
import IconCounter from "../UI/IconCounter";

import "./MediaStats.scss";

const MediaStats = ({ videoContent }) => {
  const { views, likes, channel, timestamp } = videoContent;
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    if (timestamp) {
      setFormattedDate(dateFormat.getSimplifiedFormat(timestamp));
    }
  }, [timestamp]);

  return (
    <div className="media-stats">
      <section className="media-stats__section">
        <h3 className="media-stats__channel">By {channel}</h3>
        <p className="media-stats__date">{formattedDate}</p>
      </section>
      <section className="media-stats__section">
        <IconCounter iconSrc={eyeballIcon} alt={"views"} count={views} />
        <IconCounter iconSrc={heartIcon} alt={"likes"} count={likes} />
      </section>
    </div>
  );
};

export default MediaStats;
