import React from 'react';
import StyledPerson from "./styledComponents/Person"
import {useDispatch} from "./State";
import {setActiveId} from "../store/actions";

const Person = ({ person }) => {
    const dispatch = useDispatch();
    const onClickHandler = () => {
        dispatch(setActiveId(person.id))
    }
    return (
        <StyledPerson
            id={`person_${person.id}`}
            $person={person}
            onClick={onClickHandler}
        >
            <p>{person.name.first} {person.name.last}</p>
            <p>Company: {person.company}</p>
            <p>Favorite Fruit: {person.favoriteFruit}</p>
        </StyledPerson>
    );
}


export default Person