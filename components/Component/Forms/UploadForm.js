import { useRef } from "react";
import publishIcon from "../../../assets/images/icons/publish.svg";
import Button from "../UI/Button";
import InputArea from "../UI/InputArea";
import InputBox from "../UI/InputBox";
import Divider from "../UI/Divider";

import "./UploadForm.scss";

const UploadForm = ({ handleSubmit }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  return (
    <form
      className="upload-form"
      onSubmit={(e) => {
        e.preventDefault();
        window.alert("upload success");
        handleSubmit(titleRef, descriptionRef);
      }}
    >
      <div className="upload-form__content">
        <span className="upload-form__image-container">
          <h3 className="upload-form__label">video thumbnail</h3>
          <img
            src={`${process.env.REACT_APP_API_URL}/images/Upload-video-preview.jpg`}
            className="upload-form__image"
          />
        </span>
        <span className="upload-form__input-container">
          <InputBox
            inputLabel={"Title your video"}
            inputPlaceholder={"Add a title to your video"}
            customRef={titleRef}
          />
          <InputArea
            inputLabel={"Add a video description"}
            inputPlaceholder={"Add a description to your video"}
            customRef={descriptionRef}
          />
        </span>
      </div>
      <Divider />
      <div className="upload-form__button-container">
        <Button buttonText={"publish"} iconSource={publishIcon} />
        <button className="upload-form__link">Cancel</button>
      </div>
    </form>
  );
};
export default UploadForm;
