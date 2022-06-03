import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { AccessTime } from '@mui/icons-material'

const TourCard = () => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img src="https://images.pexels.com/photos/1374585/pexels-photo-1374585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img' ></img>
                <Box paddingX={1} >
                    <Typography variant='subtitle1' component='h2' >
                        Immerse into the falls
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <AccessTime sx={{ width: 12.5 }} />
                        <Typography variant='body2' component='p' marginLeft={0.5} >
                            5 hours
                        </Typography>

                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                        marginTop={3}
                    >
                        <Rating name="read-only" value={4.5} precision={0.5} size='small' readOnly />
                        <Typography variant='body2' component='p' marginLeft={0.5} >
                            4.5
                        </Typography>
                        <Typography variant='body3' component='p' marginLeft={1.5} >
                            (655 reviews)
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='h6' component='h3' marginTop={0} >
                            From C $147
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
}

export default TourCard;
