import { Box, styled } from "@mui/material";

// Components
import Header from "./Components/Header";
import InfoHeader from "./Components/InfoHeader";
import Articles from "./Components/Articles";

const Container = styled(Box)(({ theme }) => ({
  width: "65%",
  margin: "110px auto 0 auto",
  [theme.breakpoints.down("md")]: {
    width: "75%", // Change width to 75% at 'md' (960px) and below
  },
  [theme.breakpoints.down("sm")]: {
    width: "85%", // Change width to 85% at 'sm' (600px) and below
  },
}));
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
