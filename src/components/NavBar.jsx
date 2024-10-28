import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { changeTabActive } from "../redux/action";
import logo from "../images/logo-2.png";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line react/prop-types
function NavBar({ activeTab }) {
  const [listNav] = useState(["home", "skills", "projects", "contacts"]);

  const dispatch = useDispatch();

  function changeTab(value) {
    dispatch(changeTabActive(value));
    toggleNav();
  }

  const [statusNav, setStatusNav] = useState("");

  // toogle functionality for mobile screens
  function toggleNav() {
    setStatusNav(statusNav === "active" ? null : "active");
  }

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <nav className={statusNav}>
        {listNav.map((value, index) => (
          <span
            className={activeTab === value ? "active" : ""}
            onClick={() => changeTab(value)}
            key={index}
          >
            {value}
          </span>
        ))}
      </nav>

      <div className="icon-bar" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
});

export default connect(mapStateToProps, { changeTabActive })(NavBar);
