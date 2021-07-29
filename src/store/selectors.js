import { createSelector } from 'reselect';
import take from "lodash/take";

export const selectPeople = state => state.people;
export const selectActiveId = state => state.activeId;
export const selectFilterValue = state => state.filterValue;

export const selectActivePerson = createSelector(
  selectPeople,
  selectActiveId,
  (people, activeId) => people.get(activeId)
);

export const selectFilteredPeople = createSelector(
  selectPeople,
  people => {
    // Add Filter Logic Here
    const peopleArr = Array.from(people.values());

    return take(peopleArr, 15);
  },
);
