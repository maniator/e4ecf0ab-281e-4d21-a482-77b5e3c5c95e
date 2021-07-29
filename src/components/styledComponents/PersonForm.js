import styled from "styled-components";

const PersonForm = styled.div`
  display: block;
  grid-area: personForm;
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  input, label, select {
    font-size: 1rem;
    height: 1.2rem;
    padding: 10px;
    margin: 5px 0;
    width: 100%;
  }
`;

export default PersonForm;
