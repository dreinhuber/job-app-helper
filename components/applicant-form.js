import React from 'react';

const ApplicantForm = ({setPage}) => {
    const loadLandingPage = () => {
        setPage('index');
    }
    return (
        <div>
            <h1>fill in application info</h1>
            <h2>stored locally in browser</h2>
            <button onClick={()=>loadLandingPage()}>Home</button>
        </div>
    )
}

export default ApplicantForm;