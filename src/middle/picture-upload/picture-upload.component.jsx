import React from "react";
import "./picture-upload.component.css";
import EmptyFace from "../../resources/pictures/empty-face.png";

const PictureUpload = ({showPreview}) => {

    const previewImage = () => {
        try {
            document.getElementById("passportImg").src = URL.createObjectURL(document.getElementById("filepicker").files[0])
            showPreview();
        } catch (error) {
            console.log("ERROR: " + error);
        }
    }

    return (
        <div id="picture-upload">
            <input
                id="filepicker"
                className="form-control"
                type="file"
                accept="image/*"
                onChange={() => { previewImage() }} />
            <img id="passportImg" src={EmptyFace} alt="please select" />
        </div>
    );
}

export default PictureUpload;