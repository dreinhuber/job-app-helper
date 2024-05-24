import React from 'react';

import { SingleLineInput } from '../subcomponents/input-components';
import { FormWrapper } from '../../utils/styles';

const PersonalInfoForm = ({
    handleInput,
    info
}) => {
    return (
        <FormWrapper>
            <SingleLineInput
                label="First Name: "
                storageId="applicant-first-name"
                handleInput={handleInput}
                info={info}
            />
            <SingleLineInput
                label="Last Name: "
                storageId="applicant-last-name"
                handleInput={handleInput}
                info={info}
            />
            <SingleLineInput
                label="Email: "
                storageId="applicant-email"
                handleInput={handleInput}
                info={info}
            />
            <SingleLineInput
                label="Phone: "
                storageId="applicant-phone"
                handleInput={handleInput}
                info={info}
            />
            <SingleLineInput
                label="LinkedIn: "
                storageId="applicant-linkedin"
                handleInput={handleInput}
                info={info}
            />
        </FormWrapper>
    )
}

export default PersonalInfoForm;