import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const AccordionWrapper = styled.div`
    max-width: 100%;
`;

const AccordionTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    background-color: #18424b;
    color: white;
    padding: 1cqh 1cqw;

    &:hover {
        background-color: #a9eaf7;
    }
`;

const AccordionContent = styled.div`
    background-color: #39b9d2;
`;

const Accordion = ({title, content}) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <AccordionWrapper>
                <AccordionTitle onClick={() => setIsActive(!isActive)}>
                    <div>{title}</div>
                    <div>{isActive ? '-' : '+'}</div>
                </AccordionTitle>
                {
                    isActive &&
                    <AccordionContent>{content}</AccordionContent>
                }
            </AccordionWrapper>
        </>
    )
};

export default Accordion;