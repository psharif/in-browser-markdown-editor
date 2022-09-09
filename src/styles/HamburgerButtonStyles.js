import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10%;
  background-color: #35393f;
  div {
    height: 2px;
    width: 40%;
    background-color: #fff;
  }
`;

export default StyledDiv;
