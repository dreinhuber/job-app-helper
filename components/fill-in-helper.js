import React from 'react';

const FillInHelper = ({setPage}) => {
    const loadLandingPage = () => {
        setPage('index');
    }
    return (
        <div>
            <h1>fill in helper</h1>
            <h2>uses locally stored applicant info</h2>
            <h3>how it is rendered will depend on which job site you're on</h3>
            <button onClick={()=>loadLandingPage()}>Home</button>
        </div>
    )
}

export default FillInHelper;