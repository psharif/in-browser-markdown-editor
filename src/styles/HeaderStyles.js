import styled from 'styled-components';

const StyledHeader = styled.header`
  min-height: 7%;
  width: 100%;
  background-color: #2b2d31;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  section {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    &.left-section {
      gap: 30px;
      & div.seperator {
        width: 1px;
        height: 60%;
        background-color: #979797;
        opacity: 0.6;
      }
      i {
        font-size: 24px;
      }
      h4 {
        font-family: 'Commissioner', sans-serif;
        text-transform: uppercase;
        letter-spacing: 7px;
        font-weight: 700;
      }
    }
    &.right-section {
      gap: 30px;
      margin-right: 30px;
      i {
        font-size: 24px;
        color: #7c8187;
      }
      button {
        padding: 10px 14px;
        border-radius: 3px;
        border: none;
        color: #fff;
        background-color: #e46643;
        i {
          font-size: 14px;
          margin-right: 5px;
          color: #fff;
        }
      }
    }
  }
`;

export default StyledHeader;
