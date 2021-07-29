import styled from "styled-components";

const PeopleList = styled.div`
  width: 100%;
  grid-area: peopleList;
  max-height: calc(50vh - 80px);
  overflow: hidden;
  
  ul {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: scroll;
  }
`;

export default PeopleList;
