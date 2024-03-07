import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ComfirmPhoto = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);
  const [uploadedPhoto, setUploadedPhoto] = useState(null); // State to store uploaded photo
  const navigate = useNavigate();

  const handleContinue = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/profilephotodone");
    }, 3000);
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedPhoto(reader.result);
      setIsPhotoUploaded(true);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="login">
      <div className="login-div">
        <div className="login-nav">
          <Link to={"/createprofile"}>
            <i className="fa-solid fa-chevron-left"></i>
          </Link>
          <p className="login-signup">Create your profile</p>
        </div>
        <div className="login-comfirm-phone">
          <div className="comfirmstep">
            <p>Add a profile photo</p>
            <p>
              Pick an image that shows your face. Hosts won’t be able to see
              your profile photo until your reservation is confimed
            </p>
            <div className="login-city login-photo">
              {isPhotoUploaded ? (
                <img src={uploadedPhoto} alt="Uploaded" />
              ) : (
                <label htmlFor="upload-photo" className="upload-label">
                  <input
                    type="file"
                    id="upload-photo"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    style={{ display: "none" }}
                  />
                  <i className="fa-regular fa-circle-user upload-icon"></i>
                </label>
              )}
            </div>
          </div>
          <hr />
          <button
            className={`next-comfirm-photo ${
              isLoading ? "loading-confirm" : ""
            }`}
            onClick={handleContinue}
            disabled={!isPhotoUploaded}
            style={{ backgroundColor: isPhotoUploaded ? "black" : "" }}
          >
            <div>
              <i
                className="fa-solid fa-cloud-arrow-up"
                style={{ visibility: isLoading ? "hidden" : "visible" }}
              ></i>
              <span>{isLoading ? "..." : "Upload a photo"}</span>
            </div>
          </button>

          <p className="confirm-later">I’ll do this later</p>
        </div>
      </div>
    </div>
  );
};

export default ComfirmPhoto;
