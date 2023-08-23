import "bootstrap/dist/css/bootstrap.min.css";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore"; // Add onSnapshot import
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
  const [projects, setProjects] = useState<Project[]>([]); // Initialize state with an empty array
  const projectCollectionRef = collection(db, "projects");
  const [loading, setLoading] = useState(true); // Set initial loading state to true

  useEffect(() => {
    const unsubscribe = onSnapshot(projectCollectionRef, (snapshot) => {
      const updatedProjects: Project[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        date: doc.data().date,
        technologies: doc.data().technologies,
        livePageUrl: doc.data().livePageUrl,
        sourceCodeUrl: doc.data().sourceCodeUrl,
        caption: doc.data().caption,
        filePath: doc.data().filePath,
      }));
      setProjects(updatedProjects);
      setLoading(false); // Set loading state to false once data is fetched
    });

    return () => unsubscribe(); // Unsubscribe from the snapshot listener when component unmounts
  }, []);

  const deleteProject = async (id: string) => {
    const projectDoc = doc(db, "projects", id);
    await deleteDoc(projectDoc);
  };

  if (loading) {
    return <h1>Loading</h1>;
  }

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
