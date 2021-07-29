import React, {useEffect} from 'react';

import StyledPeopleList from "./styledComponents/PeopleList"
import Person from "./Person";
import {useDispatch, useSelectors, useState} from "./State";
import {selectFilteredPeople} from "../store/selectors";
import {filterPeople} from "../store/actions";

const FRUITS = ['ALL', 'banana', 'strawberry', 'apple'];

const PeopleList = () => {
    const {people: persons, activeId, filterValue} = useState();
    const dispatch = useDispatch();
    const [people, setPeople] = React.useState([]);

    useEffect(() => {
        setPeople(selectFilteredPeople({
            people: persons, activeId, filterValue
        }))
    }, [persons, activeId, filterValue])

    const runFilter = (evt) => {
        dispatch(filterPeople(evt.currentTarget.value))
    };

    return <StyledPeopleList className="list">
        <select
            onChange={runFilter}
            name="fruitFilter"
            defaultValue="ALL"
        >{
            FRUITS.map(fruit => (
                <option
                    key={fruit}
                    value={fruit}
                >{fruit}</option>
            ))
        }</select>
        <ul>
            {
                people?.map(person => <Person person={person} key={person.id}/>)
            }
        </ul>
    </StyledPeopleList>;
}

export default PeopleList;
