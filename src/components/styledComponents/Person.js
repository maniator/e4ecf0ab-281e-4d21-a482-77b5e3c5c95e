import styled, { css } from "styled-components";

const Person = styled.li`
  display: flex;
  min-height: 75px;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid rgba(71, 71, 116, 0.6);
  padding: 10px 10px;
  line-height: 1.3;
  background: rgba(71,116,46,0.6);
  font-size: .85rem;

  ${({ $person: { enabled }}) => !enabled && css`
    opacity: .75;
  `}
  
  &:hover {
    cursor: pointer;
    opacity: 0.9;
    font-weight: 700;
  }
  
  p {
    margin: 0;
    padding: 0;
  }
`;

export default Person;
