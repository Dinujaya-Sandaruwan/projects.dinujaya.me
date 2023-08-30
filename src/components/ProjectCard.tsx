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

  return (
    <article className="projectCard">
      <img src={filePath} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{caption}</p>

        {icons.map((Icon: IconType, index: number) => (
          <Icon key={index} className="icon"></Icon>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
