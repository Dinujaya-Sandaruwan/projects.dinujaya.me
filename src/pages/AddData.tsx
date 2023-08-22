import "bootstrap/dist/css/bootstrap.min.css";
import Technologies from "../components/Technologies";

const AddData = () => {
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
          />
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupFile01">
            Thumbnail
          </label>
          <input type="file" className="form-control" id="inputGroupFile01" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </main>
  );
};

export default AddData;
