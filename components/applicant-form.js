import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { SingleLineInput, TextAreaInput } from "./subcomponents/input-components";
import Accordion from "./subcomponents/accordion-template";
import PersonalInfoForm from "./forms/personal-info";
import * as S from '../utils/storage-utils';

const ApplicantForm = ({setPage}) => {
    const [applicantInfo, setApplicantInfo] = useState({});



    const loadLandingPage = () => {
        setPage('index');
    }

    const storeApplicantInfo = e => {
        const {id: key, value} = e.target;

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
            <Accordion
                title="Personal Info"
                content={<PersonalInfoForm
                    handleInput={storeApplicantInfo}
                    info={applicantInfo}
                />}
            />
            <Accordion
                title="Work Experience"
                content="form for Work Experience here"
            />
            <Accordion
                title="Education"
                content="form for Education here"
            />
            <Accordion
                title="Miscellaneous"
                content="form for cover letter, note to hiring manager, etc. here"
            />
            <form>
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