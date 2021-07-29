import React, {useEffect} from 'react';

import StyledPeopleList from "./styledComponents/PeopleList"
import Person from "./Person";
import {useSelectors, useState} from "./State";

const PeopleList = () => {
  const { people: persons, activeId} = useState();
  const { selectFilteredPeople } = useSelectors();
  const [people, setPeople] = React.useState([]);

  useEffect(() => {
    setPeople(selectFilteredPeople({ people: persons, activeId}))
  }, [persons, activeId])

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
