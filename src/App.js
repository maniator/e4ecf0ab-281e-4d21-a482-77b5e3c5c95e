import React from 'react';

import PeopleList from './components/PeopleList';
import PersonForm from './components/PersonForm';
import StyledApp from "./components/styledComponents/App"

import './styles.css';
import {StateProvider} from "./components/State";
import {initialState} from "./store/reducers";

const App = () => (
    <StateProvider initialState={initialState}>
        <StyledApp>
            <PeopleList />
            <PersonForm />
        </StyledApp>
    </StateProvider>
)

export default App;
