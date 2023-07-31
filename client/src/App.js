import { Box, styled } from "@mui/material";

// Components
import Header from "./Components/Header";
import InfoHeader from "./Components/InfoHeader";
import Articles from "./Components/Articles";

const Container = styled(Box)`
  width: 60%;
  margin: 40px auto 0 auto;
`;
function App() {
  return (
    <Box>
      <Header />
      <Container>
        <InfoHeader />
        <Articles />
      </Container>
    </Box>
  );
}

export default App;
