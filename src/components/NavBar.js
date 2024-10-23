import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { changeTabActive } from "../redux/action";

function NavBar({ activeTab }) {
  const [listNav] = useState(["home", "skills", "projects", "contacts"]);
  const dispatch = useDispatch();
  function changeTab(value) {
    dispatch(changeTabActive(value));
  }
  return (
    <header>
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>
      <nav>
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
    </header>
  );
}

const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
});

export default connect(mapStateToProps, { changeTabActive })(NavBar);
