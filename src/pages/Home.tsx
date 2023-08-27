import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
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

const Home = () => {
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
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="home">
      {projects.map((project, index) => (
        <ProjectCard key={index} technologies={project.technologies} />
      ))}
    </div>
  );
};

export default Home;
