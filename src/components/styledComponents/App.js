import styled from "styled-components";
import PeopleList from "./PeopleList";
import PersonForm from "./PersonForm";

const App = styled.div`
  display: grid;
  width: 70vw;
  margin: 25vh auto;
  min-height: 50vh;
  max-height: 50vh;
  border: 1px solid rgba(71, 71, 116, 0.6);
  grid-template-columns: 40px 200px 20px auto 40px;
  grid-template-rows: 40px auto 40px;
  grid-template-areas:
      ". . . . ."
      ". peopleList . personForm ."
      ". . . . .";
  ${PeopleList} {
    border-right: 1px solid rgba(71, 71, 116, 0.6);
  }
  ${PersonForm} {}
`;

export default App;
