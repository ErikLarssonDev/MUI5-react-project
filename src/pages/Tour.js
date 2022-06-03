import React from 'react'
import Container from '@mui/material/Container'
import { Typography, Box } from '@mui/material'
import ImageCollage from '../components/ImageCollage'
import CustomizedAccordions from '../components/Accordian'
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BasicModal from '../components/BasicModal';


const Tour = () => {
    return (
        <Container
            sx={{
                width: 900
            }}
        >
            <Typography variant='h3' component='h1' marginTop={3}>
                Explore the World in Vegas
            </Typography>
            <Box marginTop={3} sx={{ display: 'flex' }}>
                <img src='https://images.pexels.com/photos/415999/pexels-photo-415999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' height={325} />
                <ImageCollage />
            </Box>
            <Box>
                <Typography variant='h6' component='h4' marginTop={3}>
                    About this ticket
                </Typography>
                <Typography variant='paragraph' component='p' marginTop={3}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ipsum elit, volutpat lacinia sagittis sed, facilisis vel enim. Mauris eget dui vitae velit auctor congue. Vestibulum hendrerit mi auctor tellus feugiat posuere. Donec tempor mattis dolor, laoreet dignissim massa consectetur.
                </Typography>
            </Box>
            <Box marginBottom={10}>
                <Typography variant='h6' component='h4' marginTop={3} marginBottom={2}>
                    Frequently Asked Questions
                </Typography>
                <CustomizedAccordions />
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation>
                    <BasicModal />
                </BottomNavigation>
            </Paper>
        </Container>
    )
}

export default Tour
