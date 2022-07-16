import React from "react";
import Button from "./Button";

const Header = ({ title }) => {
  const handleAdd = () => {};

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Add" onClick={handleAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
