import React from "react";
import CustomButton from "../components/index-buttons";
import styled from "styled-components";

const Index = styled.div`
    display: flex;
    flex-direction: column;
`;

const LandingPage = ({setPage}) => {

    const togglePage = (newPage) => {
        setPage(newPage)
    }

    return (
        <>
            <CustomButton onClick={()=>togglePage('applicant-form')}>Applicant Info</CustomButton>
            <CustomButton onClick={()=>togglePage('fill-in-helper')}>Fill-In Helper</CustomButton>
        </>
    )
}

export default LandingPage