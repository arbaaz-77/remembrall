import React from "react";
import { FaTrash } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3>
        {task.text}{" "}
        <div className="icons">
          <FaTrash
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => onDelete(task.id)}
          />
          <MdDoneOutline
            style={{ color: "green", cursor: "pointer" }}
            onClick={() => onToggle(task.id)}
          />
        </div>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
