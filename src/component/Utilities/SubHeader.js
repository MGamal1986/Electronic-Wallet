import React from "react";
import Classes from "./SubHeader.module.scss";
function SubHeader({ icon, title }) {
    return (
        <div className={Classes.SubHeader}>
            <span className={Classes.Icon}>{icon}</span>
            <span className={Classes.Title}>{title}</span>
        </div>
    );
}

export default SubHeader;
