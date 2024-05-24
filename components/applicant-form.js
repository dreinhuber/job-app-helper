import React from 'react';
import { useState, useEffect } from 'react';
import { SingleLineInput, TextAreaInput } from "./subcomponents/input-components";
import * as S from '../utils/storage-utils';

const ApplicantForm = ({setPage}) => {
    const [applicantInfo, setApplicantInfo] = useState({});



    const loadLandingPage = () => {
        setPage('index');
    }

    const storeApplicantInfo = e => {
        const {className: key, value} = e.target;

        let updatedInfo = applicantInfo;
        updatedInfo[key] = value;

        setApplicantInfo({...updatedInfo});

        S.writeToDataStore(key, value);
    }

    useEffect(() => {
        const ds = S.getDataStore();
        setApplicantInfo(ds);
    }, [])

    return (
        <div>
            <h1>fill in application info</h1>
            <h2>stored locally in browser</h2>
            <form>
                <SingleLineInput
                    label="Name"
                    storageId="applicant-name"
                    handleInput={storeApplicantInfo}
                    info={applicantInfo}
                />
                <TextAreaInput
                    label="Tell Me A Story"
                    storageId="applicant-story"
                    handleInput={storeApplicantInfo}
                    info={applicantInfo}
                />
            </form>
            <button onClick={()=>loadLandingPage()}>Home</button>
        </div>
    )
}

export default ApplicantForm;