import "bootstrap/dist/css/bootstrap.min.css";
import Technologies from "../components/Technologies";
import useFormDataStore from "../store/formDataStore";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../config/firebase";
import useUniqueId from "../hooks/useUniqueId";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import UploadFiles from "../components/UploadFiles";

const AddData = () => {
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  const {
    title,
    setTitle,
    date,
    setDate,
    technologies,
    livePageUrl,
    setLivePageUrl,
    sourceCodeUrl,
    setSourceCodeUrl,
    caption,
    setCaption,
    filePath,
    setFilePath,
  } = useFormDataStore();

  const [thumbnailUpload, setthumbnailUpload] = useState({} as File);
  const uniqueId = useUniqueId();

  const handleTHubmnailUpload = async () => {
    const thumbnailRef = ref(storage, `thumbnails/${uniqueId}.png`);
    const snapShot = await uploadBytes(thumbnailRef, thumbnailUpload);
    const url = await getDownloadURL(snapShot.ref);
    setFilePath(url);
  };

  const projectCollectionRef = collection(db, "projects");

  const onSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event?.preventDefault();
    if (title === "" || date === "" || caption === "") {
      alert("Please fill all the fields");
      return;
    }

    setIsUploading(true);
    await handleTHubmnailUpload();
    try {
      await addDoc(projectCollectionRef, {
        title,
        date,
        technologies,
        livePageUrl,
        sourceCodeUrl,
        caption,
        filePath,
      });
    } catch (error) {
      console.error(error);
    }

    // window.location.reload();
    setIsUploading(false);
    navigate("/add/sucess");
  };

  return (
    <main className="addData">
      <h1 className="mainTitle">Add your data to DataBase</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="proejctTitle" className="form-label">
            Project Title
          </label>
          <input
            type="text"
            className="form-control"
            id="proejctTitle"
            aria-describedby="title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Created Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            aria-describedby="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <Technologies />

        <div className="mb-3">
          <label htmlFor="livePage" className="form-label">
            Live Page (URL)
          </label>
          <input
            type="text"
            className="form-control"
            id="livePage"
            aria-describedby="title"
            onChange={(e) => setLivePageUrl(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courceCode" className="form-label">
            Source Code (URL)
          </label>
          <input
            type="text"
            className="form-control"
            id="courceCode"
            aria-describedby="title"
            onChange={(e) => setSourceCodeUrl(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Caption
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            defaultValue={""}
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupFile01">
            Thumbnail
          </label>
          <input
            type="file"
            className="form-control"
            id="inputGroupFile01"
            onChange={(e) =>
              e.target.files?.[0] && setthumbnailUpload(e.target.files[0])
            }
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={isUploading}
          onClick={(e) => onSubmit(e)}
        >
          {isUploading ? "Submitting Data..." : "Submit"}
        </button>
      </form>
    </main>
  );
};

export default AddData;
