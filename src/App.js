import styled from 'styled-components';
import Header from './components/Header';
import Sheet from './components/Sheet';

const StyledContainer = styled.article`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto Slab', serif;
  /*  
  font-family: 'Commissioner', sans-serif;
  font-family: 'Roboto', sans-serif;
  font-family: 'Roboto Mono', monospace;
  font-family: 'Roboto Slab', serif;
  */
`;

const StyledMain = styled.main`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <StyledContainer>
      <Header />
      <StyledMain>
        <Sheet />
        <Sheet />
      </StyledMain>
    </StyledContainer>
  );
}

export default App;
