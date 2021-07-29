import React, {useEffect} from 'react';

import StyledPersonForm from "./styledComponents/PersonForm"
import {useState} from "./State";
import Input from "./Input";
import {selectActivePerson} from "../store/selectors";
const FRUITS = ['ALL', 'banana', 'strawberry', 'apple'];

const PersonForm = () => {
    const state = useState();
    const [person, setPerson] = React.useState(null);

    useEffect(() => {
        setPerson(selectActivePerson(state));
    }, [state]);

    if (!person) {
        return (<StyledPersonForm>No person selected yet</StyledPersonForm>);
    }

    return (
        <StyledPersonForm className="form" key={person.id}>
            <p>Change to a different person to save</p>
            <form
                onSubmit={(e) => e.preventDefault()}
            >
                <Input
                    field="name.first"
                    person={person}
                />
                <Input
                    field="name.last"
                    person={person}
                />
                <Input
                    field="company"
                    person={person}
                />
                <Input
                    field="favoriteFruit"
                    person={person}
                    type="select"
                >{
                    FRUITS.map(fruit => (
                        <option
                            key={fruit}
                            value={fruit} 
                        >{fruit}</option>
                    ))
                }</Input>
            </form>
        </StyledPersonForm>
    );
}

export default PersonForm;
