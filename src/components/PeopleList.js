import React, {useEffect} from 'react';

import StyledPeopleList from "./styledComponents/PeopleList"
import Person from "./Person";
import {useSelectors, useState} from "./State";
import Input from "./Input";
const FRUITS = ['ALL', 'banana', 'strawberry', 'apple'];

const PeopleList = () => {
  const { people: persons, activeId} = useState();
  const { selectFilteredPeople } = useSelectors();
  const [people, setPeople] = React.useState([]);

  useEffect(() => {
    setPeople(selectFilteredPeople({ people: persons, activeId}))
  }, [persons, activeId])


  // TODO: my comp froze for 5 mins...
  const runFilter = () => {}
  /*
   TODO: not ideal to load thousands of dom elements at once
    Should probably lazy-load them
   */
  return <StyledPeopleList className="list">
    <select
        onChange={runFilter}
        name="fruitFilter"
        defaultValue="ALL"
    >{
      FRUITS.map(fruit => (
          <option
              value={fruit}
          >{fruit}</option>
      ))
    }</select>
    <ul>
      {
        people?.map(person => <Person person={person} key={person.id} />)
      }
    </ul>
  </StyledPeopleList>;
}

export default PeopleList;
