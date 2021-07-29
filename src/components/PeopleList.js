import React from 'react';

import StyledPeopleList from "./styledComponents/PeopleList"
import Person from "./Person";
import {useSelectors, useState} from "./State";

// Options for select
const FRUITS = ['ALL', 'banana', 'strawberry', 'apple'];

const PeopleList = () => {
  const state = useState();
  const { selectFilteredPeople } = useSelectors();

  const people = selectFilteredPeople(state);

  /*
   TODO: not ideal to load thousands of dom elements at once
    Should probably lazy-load them
   */
  return <StyledPeopleList className="list">
    Put filter + list of people here
    <ul>
      {
        people?.map(person => <Person person={person} key={person.id} />)
      }
    </ul>
  </StyledPeopleList>;
}

export default PeopleList;
