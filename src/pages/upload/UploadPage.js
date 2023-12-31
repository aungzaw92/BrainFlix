import { useNavigate } from "react-router-dom";

import UploadForm from "../../components/Component/Forms/UploadForm";
import Divider from "../../components/Component/UI/Divider";
import apiService from "../../components/apiService";
import "./UploadPage.scss";

const UploadPage = () => {
  const navigate = useNavigate();
  const handleSubmit = (titleRef, descriptionRef) => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    console.log(title, description);
    const newVideo = { title, description };

    apiService.postVideo(newVideo).then((response) => {
      navigate("../");
    });
  };
  return (
    <main className="upload-page">
      <h1 className="upload-page__title">Upload Video</h1>
      <Divider />
      <UploadForm handleSubmit={handleSubmit} />
    </main>
  );
};
export default UploadPage;
