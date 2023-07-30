import { Box, styled } from "@mui/material";

// Components
import Header from "./Components/Header";
import InfoHeader from "./Components/InfoHeader";

const Container = styled(Box)`
  width: 60%;
  margin: 40px auto 0 auto;
`;
function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <InfoHeader />
      </Container>
    </div>
  );
}

export default App;
