import React from 'react';
import { connect } from 'react-redux';

// (Optional) Select component
import Select from 'react-select';

import * as selectors from '../store/selectors';
import * as actions from '../store/actions';

// Options for select
const FRUITS = ['ALL', 'banana', 'strawberry', 'apple'];

class PeopleList extends React.Component {
  render() {
    const { people } = this.props;

    console.log('PEOPLE', people);

    return <div className="list">Put filter + list of people here</div>;
  }
}

export const mapStateToProps = state => {
  return {
    people: selectors.selectFilteredPeople(state),
    activeId: selectors.selectActiveId(state),
  };
};

export const mapDispatchToProps = dispatch => ({
  filter: filterValue => dispatch(actions.filterPeople(filterValue)),
  setActiveId: id => dispatch(actions.setActiveId(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PeopleList);
