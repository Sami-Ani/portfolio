import { useRef, useState } from "react";

import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

import projectImage1 from "../images/projects/wordpress-digitalAgency.png";
import projectImage2 from "../images/projects/wordpress-eCommerce.png";
import projectImage3 from "../images/projects/The-wild-oasis.png";
import projectImage4 from "../images/projects/fast-react-pizza.png";
import projectImage5 from "../images/projects/natours.png";
import projectImage6 from "../images/projects/daye-library.png";
import projectImage7 from "../images/projects/worldwise.png";

import CustomHook from "./CustomHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Projects() {
  const [listProjects] = useState([
    {
      name: "Digital Marketing Agency Website",
      des: "A modern looking  digital marketing website to connect clients with proffessional",
      language: "WordPress and Elementor website builder",
      images: projectImage1,
    },
    {
      name: "Product eCommerce Website",
      des: "An eCommerce site to sell and buy products",

      language: "WordPress and WooCommerce",
      images: projectImage2,
    },
    {
      name: "Project Wild-Oasis",
      des: "A slik and elegant site built with modern react to manage a vacation resort",

      language: "HTML5 | CSS3| React Js |  Redux | reactQuery | supabase",
      images: projectImage3,
    },
    {
      name: "Project Fast React Pizza",
      des: "A website to order pizza online",

      language: "HTML5 | CSS3 | React Js | tailwindCSS",
      images: projectImage4,
    },
    {
      name: "Project Natours Touring website",
      des: "A beautiful website built with full backend implementation using Nodejs and MongoDB",

      language: "HTML5 | CSS3 | Pug template | Node.js | mongoDB",
      images: projectImage5,
    },
    {
      name: "Project Daye Library",
      des: "An online library site to read , order and search for books",
      language: "HTML5 | CSS3 | Pug template | Node.js | mongoDB",
      images: projectImage6,
    },
    {
      name: "Project world-wise",
      des: "A web-app for users to track thier adventures",

      language: "HTML5 | CSS3 | React Js | Redux",
      images: projectImage7,
    },
  ]);

  const refTab = useRef();
  const refDivs = useRef([]);

  CustomHook(refTab, refDivs);

  return (
    <section className="projects" ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>
        {" "}
        This are my Projects ...
      </div>
      <div className="des" ref={(el) => el && refDivs.current.push(el)}>
        Below are highlighted some of my previous works
      </div>
      <div className="list" ref={(el) => el && refDivs.current.push(el)}>
        {listProjects.map((project, index) => {
          return (
            <div className="item" key={index}>
              {/* Images */}
              <div
                key={index}
                className="images"
                ref={(el) => el && refDivs.current.push(el)}
              >
                <img src={project.images} alt="" />{" "}
              </div>

              {/* Contents */}

              <div className="content">
                <h3 ref={(el) => el && refDivs.current.push(el)}>
                  {project.name}
                </h3>
                <div
                  className="des"
                  ref={(el) => el && refDivs.current.push(el)}
                >
                  {project.des}
                </div>

                <div
                  className="languages"
                  ref={(el) => el && refDivs.current.push(el)}
                >
                  <FontAwesomeIcon icon={faEarthAmericas} />
                  <div>
                    <h4 ref={(el) => el && refDivs.current.push(el)}>
                      Languages
                    </h4>
                    <div
                      className="de"
                      ref={(el) => el && refDivs.current.push(el)}
                    >
                      {project.language}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
