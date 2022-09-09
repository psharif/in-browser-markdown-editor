import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  color: #fff;
  i {
    color: #fff;
    font-size: 24px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      margin: 3px;
      font-family: 'Roboto', sans-serif;
    }
    p:first-child {
      color: #7c8187;
      opacity: 0.5;
    }
  }
`;

export default StyledSection;
