import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header_container">
      <h1>Task 2</h1>
      <button onClick={props.function}>Get Users</button>
    </div>
  );
};

export default Header;
