import React from "react";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from "./landing-page";
import ApplicantForm from "../components/applicant-form";
import FillInHelper from "../components/fill-in-helper";

const App = () => {
    const [page, setPage] = useState('index');

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

export default App