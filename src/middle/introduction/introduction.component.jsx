import React from "react";
import "./introduction.component.css";
import PassportMaker from "../passportmaker/passportmaker.component";

const Introduction = () => {
    return (
    <div id="introduction">
        <p>Welcome to <PassportMaker/> where you can create you're own Passport picture for free.</p>
        <p>To get started, please upload the picture you would like to make a Passport with:</p>
    </div>);
}

export default Introduction;
