import { useRef } from "react";
import placeholderImage from "../../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../../assets/images/icons/upload.svg";
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
          <img src={placeholderImage} className="upload-form__image" />
        </span>
        <span className="upload-form__input-container">
          <InputBox
            label={"Title your video"}
            placeholder={"Add a title to your video"}
            customRef={titleRef}
          />
          <InputArea
            label={"Add a video description"}
            placeholder={"Add a description to your video"}
            customRef={descriptionRef}
          />
        </span>
      </div>
      <Divider />
      <div className="upload-form__button-container">
        <Button buttonText={"publish"} iconSrc={uploadIcon} />
        <button className="upload-form__link">Cancel</button>
      </div>
    </form>
  );
};
export default UploadForm;
