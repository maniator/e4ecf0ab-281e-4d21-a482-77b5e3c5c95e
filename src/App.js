import React from 'react';
import { connect } from 'react-redux';

import * as selectors from './store/selectors';

// Delete Instructions when ready to code
import Instructions from './components/Instructions';

import PeopleList from './components/PeopleList';
import PersonForm from './components/PersonForm';
import StyledApp from "./components/styledComponents/App"

import './styles.css';

class App extends React.PureComponent {
  render() {
    return (
        <StyledApp>
          <PeopleList />
          <PersonForm key={this.props.activeId || 'BLANK'} />
        </StyledApp>
    );
  }
}

export const mapStateToProps = state => {
  return {
    activeId: selectors.selectActiveId(state),
  };
};

export default connect(mapStateToProps)(App);
