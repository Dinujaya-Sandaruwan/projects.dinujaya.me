import { IconType } from "react-icons";
import iconList from "../hooks/useIconList";

interface Props {
  id: string;
  technologies: string[];
  title: string;
  date: string;
  livePageUrl: string;
  sourceCodeUrl: string;
  caption: string;
  filePath: string;
}

const ProjectCard = ({
  id,
  technologies,
  title,
  date,
  livePageUrl,
  sourceCodeUrl,
  caption,
  filePath,
}: Props) => {
  const icons = iconList(technologies);
  console.log("File Path", filePath);

  return (
    <article className="projectCard">
      <img src={filePath} alt="" />
      <h3>{title}</h3>
      <p>Project Description</p>

      <a href="">
        <button>View Project</button>
      </a>
      <a href="">
        <button>SourceCode</button>
      </a>

      {icons.map((Icon: IconType, index: number) => (
        <Icon key={index}></Icon>
      ))}
    </article>
  );
};

export default ProjectCard;
