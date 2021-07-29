import {createSelector} from 'reselect';
import take from "lodash/take";

export const selectPeople = state => state.people;
export const selectActiveId = state => state.activeId;
export const selectFilterValue = state => state.filterValue;

export const selectActivePerson = createSelector(
    selectPeople,
    selectActiveId,
    (people, activeId) => people.get(activeId)
);

// TODO: people pagination
const numberOfLoadedPeople = 15;
// TODO: array filter here, do this better with maybe a map or tree later
export const selectFilteredPeople = createSelector(
    selectPeople,
    selectFilterValue,
    (people, filterValue) => {
        const peopleArr = Array.from(people.values());

        if (filterValue === "ALL") {
            return take(peopleArr, numberOfLoadedPeople);
        }

        return take(
            peopleArr.filter(
                ({favoriteFruit}) => favoriteFruit === filterValue),
            numberOfLoadedPeople);
    },
);
