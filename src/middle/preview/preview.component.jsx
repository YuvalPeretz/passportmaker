import React, { useEffect } from "react";
import "./preview.component.css";

const Preview = ({ visible }) => {
    const picturesrc = visible ? document.getElementById("passportImg").src : null;
    useEffect(() => {
        if (visible) {
            for (let i = 0; i < 5; i++) {
                const div = document.createElement("div");
                div.id = `final-preview-row-${i}`
                document.getElementById("final-preview").appendChild(div);
                for (let j = 0; j < 3; j++) {
                    const img = document.createElement("img");
                    img.src = picturesrc;
                    img.className = "column";
                    img.style.height = "45mm";
                    img.style.width = "35mm";
                    img.alt = "nothing";
                    img.style.margin = "5px";
                    img.style.border = "1px solid black"
                    document.getElementById(`final-preview-row-${i}`).appendChild(img);
                }
            }
        }
    }, [picturesrc]);

    if (visible)
        return (
            <div id="preview">
                <button
                    id="print-btn"
                    className="btn"
                    onClick={() => window.print()}>Print/Save</button>
                <div id="final-preview" className="container" />
            </div>
        );
    return (<div />);
}

export default Preview;
