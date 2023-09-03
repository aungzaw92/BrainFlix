import React from "react";
import avatar from "../../../assets/images/Mohan-muruge.jpg";

import Avatar from "../UI/Avatar";
import Button from "../UI/Button";
import InputArea from "../UI/InputArea";
import InputBox from "../UI/InputBox";


const AddComment = ({
  avatarSrc,
  userName,
  handleChange,
  value,
  handleSubmit,
}) => {
  return (
    <form className="add-comment">
      <div className="add-comment__section--icon-container">
        {/* Display the avatar image */}
        <AvatarComponent avatarSource={avatar} userName={userName} />
      </div>
      <div className="add-comment__section">
        <span className="add-comment__input">
          <InputBoxComponent
            handleInputChange={handleChange}
            inputValue={value}
            inputPlaceholder={"Add a new comment"}
            inputId={"new-comment"}
            inputLabel={"JOIN THE CONVERSATION"}
          />
        </span>
        <span className="add-comment__input-area">
          <InputAreaComponent
            handleInputChange={handleChange}
            inputValue={value}
            inputPlaceholder={"Add a new comment"}
            inputId={"new-comment"}
            inputLabel={"JOIN THE CONVERSATION"}
          />
        </span>
        <Button
          buttonText={"COMMENT"}

          iconSource={newCommentSrc}

          handleClick={handleSubmit}
        />
      </div>
    </form>
  );
};

export default AddComment;
