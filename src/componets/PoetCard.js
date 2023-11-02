import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const PoetCard = () => {
    return <Grid item xs={3}>
        <Paper elevation = {5}>
            <img src='https://i2.wp.com/internopoesia.com/wp-content/uploads/2018/07/seishi3.jpg?w=646&ssl=1'
            alt='poet'
            className="img"
            />
            <Box paddingX={1}>
                <Typography variant="subtitle1"component="h2">
                    Ishikawa Bokaku
                </Typography>
                <Box
                sx={{
                    display: "flex",
                    alignItems: "center"
                }}
                >
                <Typography variant="body2"component="p">
                    1875-1935
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center"
                }}
                >
                <Typography variant="body2"component="p">
                    Hototogisu poet
                </Typography>
            </Box>

            </Box>
        </Paper>
    </Grid>;
};

export default PoetCard