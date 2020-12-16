import React from "react";
import Classes from "./Task.module.scss";
function Task({ title, icon }) {
    return (
        <div className={Classes.Task}>
            <div className={Classes.Icon}>{icon}</div>
            <div className={Classes.Title}>{title}</div>
        </div>
    );
}
export default Task;
