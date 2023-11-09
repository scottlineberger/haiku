import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const PoetCard = ({poet}) => {
    return <Grid item xs={3}>
        <Paper elevation = {5} square={false}>
            <img 
            src= {poet.image}
            alt='poet'
            className="img"
            />
            <Box paddingX={1}>
                <Typography variant="h6"component="h2">
                {poet.Romaji}
                </Typography>
                <Box
                sx={{
                    display: "flex",
                    alignItems: "center"
                }}
                >
                <Typography variant="body2"component="p">
                    {poet.kanji}
                </Typography>
            </Box>
                <Box
                sx={{
                    display: "flex",
                    alignItems: "center"
                }}
                >
                <Typography variant="body2"component="p">
                    {poet.Dates}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center"
                }}
                >
                <Typography variant="body2"component="p">
						 {poet.School} School
                </Typography>
            </Box>
            


            </Box>
            <Box textAlign='center'padding={2}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button variant='contained'>Bio</Button>
                <Button variant='contained'>Poems</Button>
             </ButtonGroup>
             </Box>
        </Paper>
    </Grid>;
};

export default PoetCard