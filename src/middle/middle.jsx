import React, { useState } from "react";
import Introduction from "./introduction/introduction.component";
import "./middle.css";
import PictureUpload from "./picture-upload/picture-upload.component";
import Preview from "./preview/preview.component";

const Middle = () => {
    
    const [previewVisibility, setPreviewVisibility] = useState(false);

    const ShowPreview = () => { setPreviewVisibility(true) }

    return (
        <div id="middle">
            <Introduction />
            <PictureUpload showPreview={ShowPreview}/>
            <Preview visible={previewVisibility}/>
        </div>
    );
}

export default Middle;