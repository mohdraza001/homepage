import * as React from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '../EventsCard';
export default function OngoingCard() {
  return (
    <div>
         <Container maxWidth="lg">
    <Typography variant="h4">Ongoing Events</Typography>
    <br/>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(4)).map((_, index) => (
          <Grid item xs={2} sm={4} md={3} key={index}>
            <Card/>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
    </div>
  );
}