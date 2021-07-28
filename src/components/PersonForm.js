import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../store/selectors';
import * as actions from '../store/actions';

import StyledPersonForm from "./styledComponents/PersonForm"

class PersonForm extends React.Component {
  render() {
    const { person } = this.props;

    console.log('ACTIVE PERSON', person);

    return <StyledPersonForm className="form">Form to edit person here</StyledPersonForm>;
  }
}

export const mapStateToProps = state => {
  return {
    person: selectors.selectActivePerson(state),
  };
};

export const mapDispatchToProps = dispatch => ({
  save: data => dispatch(actions.savePerson(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PersonForm);
