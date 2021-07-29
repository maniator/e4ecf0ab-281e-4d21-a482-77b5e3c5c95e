import React from 'react';

import StyledPersonForm from "./styledComponents/PersonForm"
import {useSelectors, useState} from "./State";
import Person from "./Person";
import {selectActivePerson} from "../store/selectors";

const PersonForm = () => {
    const state = useState();
    const { selectActivePerson } = useSelectors();

    const person = selectActivePerson(state);

    if (!person) {
        return (<StyledPersonForm>No person selected yet</StyledPersonForm>);
    }

    return (
        <StyledPersonForm className="form">
            <Person person={person} />
        </StyledPersonForm>
    );
}

export default PersonForm;
