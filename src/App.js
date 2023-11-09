
import "./App.css";
import PoetCard from "./componets/PoetCard";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SearchAppBar from "../src/componets/AppBar";
import Box from '@mui/material/Box';
import poets from "./data.json";
import { Typography } from "@mui/material";


function App() {
  return (
  <div className="App">
    <SearchAppBar/>
    <Box padding={2}>
    <Container>
      {poets.map((poet) => (
        <>
          <Typography
          variant="h4"
          component="h2"
          marginTop={5}
          marginBotton={3}
        >
          Major Poets of the {poet.era} Period
        </Typography>
         <Grid container spacing={5}>
          {poet.poets.map((Romaji, index) => ( 
          <PoetCard poet={Romaji} key={index} />
          ))}
      </Grid> 
        </>

      ))}

    </Container>
    </Box>
  </div>
  );
};

export default App;
