import styled from "styled-components";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import bgImage from './assets/images/background.png'

const MainContainer = styled.div`
  min-height: 100vh;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
`;

function App() {
  return (
    <MainContainer bgImage={bgImage}>
      <Header />
      <Main/>
    </MainContainer>
  );
}

export default App;
