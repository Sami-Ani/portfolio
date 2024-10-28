import { useRef, useState } from "react";

import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faNodeJs,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";

import CustomHook from "./CustomHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Skills() {
  const [listSkills] = useState([
    {
      name: "HTML",
      des: " Constructing the digital foundation, molding content into structured brilliance, laying the bedrock for captivating online experiences.",
      icon: faHtml5,
    },

    {
      name: "CSS",
      des: "Painting the web canvas with style and finesse, harmonizing design elements to create visually stunning and engaging websites.",
      icon: faCss3,
    },

    {
      name: "Javascript",
      des: "Breathing life into web pages, orchestrating interactive experiences with dynamic functionality, and infusing creativity into digital landscapes.",
      icon: faJs,
    },
    {
      name: "React",
      des: "Building powerful and scalable user interfaces with a declarative and component-based approach, seamlessly blending simplicity and performance for modern web applications.",
      icon: faReact,
    },

    {
      name: "Node.js",
      des: "Unleashing the power of JavaScript on the server-side, creating robust, high-performance applications that handle concurrent operations with grace and efficiency.",
      icon: faNodeJs,
    },
    {
      name: "WordPress",
      des: "using the world's most popular content management system, with customizable themes and plugins, empowering content creators with boundless possibilities.",
      icon: faWordpress,
    },
  ]);

  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);

  return (
    <section className="skills" ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>
        This are my Skills ...
      </div>
      <div className="des" ref={(el) => el && refDivs.current.push(el)}>
        Below are some of the tools in my tech stack
      </div>
      <div className="list">
        {listSkills.map((skill, key) => {
          return (
            <div
              key={key}
              className="item"
              ref={(el) => el && refDivs.current.push(el)}
            >
              <FontAwesomeIcon icon={skill.icon} />
              <h3>{skill.name}</h3>
              <div className="des">{skill.des}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
