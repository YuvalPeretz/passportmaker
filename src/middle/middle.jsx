import React, { useState } from "react";
import Introduction from "./introduction/introduction.component";
import "./middle.css";
import PictureUpload from "./picture-upload/picture-upload.component";
import Preview from "./preview/preview.component";

const Middle = () => {
    
    const [previewVisibility, setPreviewVisibility] = useState(false);
    const [selectedImg, setSelectedImg] = useState(undefined);

    const ShowPreview = () => {
        setPreviewVisibility(true)
        setSelectedImg(document.getElementById("passportImg").src);
    }

    return (
        <div id="middle">
            <Introduction />
            <PictureUpload showPreview={ShowPreview}/>
            <Preview visible={previewVisibility} selectedImg={selectedImg}/>
        </div>
    );
}

export default Middle;