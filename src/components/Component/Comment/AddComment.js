import React from "react";
import Avatar from "../UI/Avatar";
import Button from "../UI/Button";
import Divider from "../UI/Divider";
import IconCounter from "../UI/IconCounter";
import InputArea from "../UI/InputArea";
import InputBox from "../UI/InputBox";
import newCommentSrc from "../../../assets/images/icons/add_comment.svg";
import "./AddComment.scss";

const AddCommentForm = ({
  avatarSrc,
  userName,
  handleChange,
  value,
  handleSubmit,
}) => {
  return (
    <form className="add-comment">
      <div className="add-comment__section--icon-container">
        <Avatar avatarSrc={avatarSrc} userName={userName} />
      </div>
      <div className="add-comment__section">
        <span className="add-comment__input">
          <InputBox
            handleChange={handleChange}
            value={value}
            placeholder={"Add a new comment"}
            id={"new-comment"}
            label={"JOIN THE CONVERSATION"}
          />
        </span>
        <span className="add-comment__input-area">
          <InputArea
            handleChange={handleChange}
            value={value}
            placeholder={"Add a new comment"}
            id={"new-comment"}
            label={"JOIN THE CONVERSATION"}
          />
        </span>
        <Button
          text={"COMMENT"}
          iconSrc={newCommentSrc}
          handleClick={handleSubmit}
        />
      </div>
    </form>
  );
};

export default AddCommentForm;
