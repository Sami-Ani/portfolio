import { useRef, useState } from "react";
import CustomHook from "./CustomHook";

function Contacts() {
  const [listContacts] = useState([
    {
      title: "Phone Number",
      value: "+251-952649646  |  +251-921406314",
    },
    {
      title: "Email",
      value: "samuelaseffa12@gmail.com",
    },
  ]);

  const refTab = useRef();
  const refDivs = useRef([]);

  CustomHook(refTab, refDivs);

  return (
    <section className="contacts" ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>
        Contact Me
      </div>
      <div className="des" ref={(el) => el && refDivs.current.push(el)}>
        Let&apos;s get in touch ...
      </div>
      <div className="list" ref={(el) => el && refDivs.current.push(el)}>
        {listContacts.map((value, key) => {
          return (
            <div key={key} className="item">
              <h3>{value.title}</h3> <div>{value.value}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Contacts;
