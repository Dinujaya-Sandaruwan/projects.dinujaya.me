import { IconType } from "react-icons";
import iconList from "../hooks/useIconList";

interface Props {
  technologies: string[];
}

const ProjectCard = ({ technologies }: Props) => {
  const icons = iconList(technologies);
  console.log(technologies);
  return (
    <article className="projectCard">
      <img src="" alt="" />
      <h3>Project Name</h3>
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
