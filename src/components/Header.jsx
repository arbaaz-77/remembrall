import React from "react";
import Button from "./Button";
import { GiCrystalBall } from "react-icons/gi";

const Header = ({ title, onShowAddTask, showAddTask }) => {
  return (
    <header className="header">
      <h1>
        {title} <GiCrystalBall />
      </h1>
      <Button
        color={showAddTask ? "red" : "green"}
        text={showAddTask ? "Close" : "Add"}
        onClick={onShowAddTask}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Remembrall",
};

export default Header;
