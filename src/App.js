import React from "react";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from "./landing-page";
import ApplicantForm from "../components/applicant-form";
import FillInHelper from "../components/fill-in-helper";
import OuterFrame from "../components/outer-frame";
import {
    storageAvailable,
    checkOrCreateDataStoreKey,
    getDataStore
} from "../utils/storage-utils";


const App = () => {
    const [page, setPage] = useState('index');

    if (!storageAvailable()) {
        return (
            <h1>Unsupported Browser</h1>
        )
    } else {
        checkOrCreateDataStoreKey();
    }

    const store = getDataStore();

    function renderPage () {
        switch (page) {
            case 'index':
                return (<LandingPage
                    setPage={setPage}
                    />);
                break;
            case 'applicant-form':
                return (<ApplicantForm
                    setPage={setPage}
                    />);
                break;
            case 'fill-in-helper':
                return (<FillInHelper
                    setPage={setPage}
                    />);
                break;
        }
    }

    return (
        <OuterFrame>
            {renderPage()}
        </OuterFrame>
    )
}

export default App