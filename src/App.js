
import "./App.css";
import PoetCard from "./componets/PoetCard";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function App() {
  return (
  <div className="App">
    <Container>
      <Grid container spacing={5}>
       <PoetCard/>
       <PoetCard/>
       <PoetCard/>
       <PoetCard/>
      </Grid>
    </Container>
  </div>
  );
};

export default App;
