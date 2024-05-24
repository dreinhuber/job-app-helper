import React from 'react';
import { useState } from 'react';
import { SingleLineInput, TextAreaInput } from "./subcomponents/input-components";

function storeApplicantInfo (e) {
    const storage = window["localStorage"];
    const {className: key, value} = e.target;

    storage.setItem(key, value);
    // console.log(key);
    // console.log(value);
}

const ApplicantForm = ({setPage}) => {
    const loadLandingPage = () => {
        setPage('index');
    }
    return (
        <div>
            <h1>fill in application info</h1>
            <h2>stored locally in browser</h2>
            <SingleLineInput
                label="Name"
                storageId="applicant-name"
                handleInput={storeApplicantInfo}
            />
            <TextAreaInput
                label="Tell Me A Story"
                storageId="applicant-story"
                handleInput={storeApplicantInfo}
            />
            <button onClick={()=>loadLandingPage()}>Home</button>
        </div>
    )
}

export default ApplicantForm;