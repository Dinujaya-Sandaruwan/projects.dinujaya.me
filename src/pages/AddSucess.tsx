import useFormDataStore from "../store/formDataStore";

const AddSucess = () => {
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

  return (
    <main className="addSucess">
      <div className="content">
        <h1 className="sucessTitle">Your Data was added sucessfully!</h1>
        <p>
          {title +
            date +
            technologies +
            livePageUrl +
            sourceCodeUrl +
            caption +
            filePath}
        </p>
      </div>
    </main>
  );
};

export default AddSucess;
