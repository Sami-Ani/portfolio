import { useRef } from "react";
import avatar from "../images/avatar.jpg";
import CustomHook from "./CustomHook";

import CV from "../images/File/myCV.pdf";

function Home() {
  const refTab = useRef();

  CustomHook(refTab);

  return (
    <section className="home" ref={refTab}>
      <div className="content">
        <div className="name">
          MY NAME IS <span>SAMUEL ASEFFA</span>
        </div>

        <div className="des">
          I am proficient in front-end web development using WordPress as well
          as MERN stack frameworks and have experience with other programming
          languages like python and java.
        </div>

        <a href={CV} target="_blank" rel="noopener noreferrer">
          Download My CV
        </a>
      </div>

      <div className="avatar">
        <div className="card">
          <img src={avatar} alt="" />
          <div className="info">
            <div>Web Development</div>
            <div>Graphics</div>
            <div>Application Development</div>
            <div>Web Design</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
