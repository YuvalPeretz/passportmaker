import React from "react";
import "./creator.component.css";

const Creator = () => {
    return (
        <div id="creator">
            Created by <span className="clickable" onClick={() => window.open("https://www.linkedin.com/in/yuval-peretz-a271641b6/", "linkedin")}>Yuval Peretz.</span>
        </div>
    );
}

export default Creator;