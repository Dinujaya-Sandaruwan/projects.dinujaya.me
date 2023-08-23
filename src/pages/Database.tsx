import "bootstrap/dist/css/bootstrap.min.css";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

interface Project {
  id: string;
  title: string;
  date: string;
  technologies: string[];
  livePageUrl: string;
  sourceCodeUrl: string;
  caption: string;
  filePath: string;
}

const Database = () => {
  const [projects, setProjects] = useState<Project[]>([{}] as Project[]);
  const projectCollectionRef = collection(db, "projects");
  const [datalist, setdatalist] = useState([{}] as Project[]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const data = await getDocs(projectCollectionRef);
        const filteredData: Project[] = data.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          date: doc.data().date,
          technologies: doc.data().technologies,
          livePageUrl: doc.data().livePageUrl,
          sourceCodeUrl: doc.data().sourceCodeUrl,
          caption: doc.data().caption,
          filePath: doc.data().filePath,
        }));
        setProjects(filteredData);
        setdatalist(filteredData);
      } catch (error) {
        console.log(error);
      }
    };

    getProjects();
  }, [datalist]);

  const deleteProject = async (id: string) => {
    const ProjectDoc = doc(db, "projects", id);
    await deleteDoc(ProjectDoc);
    datalist.filter((item) => item.id !== id);
  };

  return (
    <div className="container">
      <ul className="list-group">
        {projects.map((project, index) => (
          <li className="list-group-item dataList" key={index}>
            <span>
              {index} {project.title}
            </span>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => deleteProject(project.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Database;
