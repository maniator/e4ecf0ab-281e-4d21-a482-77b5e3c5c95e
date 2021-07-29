import people from '../data/people.json';
import * as types from './types';

export const initialState = {
  people: new Map(people.map((person) => [person.id, person])),
  activeId: null,
  filterValue: 'ALL',
};

function addReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_ACTIVE_ID: {
      const activeId = payload.id;

      return {
        ...state,
        activeId,
      };
    }
    case types.FILTER_PEOPLE: {
      const filterValue = payload.filterValue;

      return {
        ...state,
        filterValue,
      };
    }
    case types.SAVE_PERSON: {
      const activeId = state.activeId;
      const data = payload.data;

      // Save data for active person

      return state;
    }
    default:
      return state;
  }
}

export default addReducer;
