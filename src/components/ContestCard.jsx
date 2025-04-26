import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ContestCard() {
  return (
    <Card style={{border: 'none', boxShadow: 'none'}}>
      <CardContent style={{padding: '0rem'}}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom
          style={{display: 'flex', justifyContent: 'space-between'}}>
          <span>CodeRunner</span>
          <span style={{color: '#65b168'}}>Live</span>
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
          Jumble Puzzle
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions style={{display: "flex", justifyContent: 'space-between'}}>
        <span style={{fontSize: '0.85rem'}}>Ending in 08:08:08</span>
        <Button size='small' className='eventRegisterBt'>Register</Button>
      </CardActions>
    </Card>
  );
}