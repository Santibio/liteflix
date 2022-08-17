import styled from "styled-components";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import bgImage from './assets/images/background.webp'

const MainContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(
      180deg,
      rgba(36, 36, 36, 0) 0%,
      #242424 100%
    ),
    url(${bgImage});
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
