import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Carousel } from '@material-tailwind/react';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


export default function EventCard() {
  return (
    <Carousel className="rounded-xl" 
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                activeIndex === i ? "bg-[#cfcfcf]" : "bg-[#f1f2f2]"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      prevArrow={false} 
      nextArrow={false}
      autoplay={true}
      autoplayDelay={5000}
      transition={{ type: "tween", duration: 1 }}
      loop={true}>
        <Card style={{border: 'none', boxShadow: 'none'}}>
          <CardContent style={{padding: '0rem'}}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Weekly Event
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
            <span style={{fontSize: '0.85rem'}}>Thrusday, 27 Nov</span>
            <Button size='small' className='eventRegisterBt'>Register</Button>
          </CardActions>
        </Card>
        <Card style={{border: 'none', boxShadow: 'none'}}>
          <CardContent style={{padding: '0rem'}}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Weekly Event
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
            <span style={{fontSize: '0.85rem'}}>Thrusday, 27 Nov</span>
            <Button size='small' className='eventRegisterBt'>Register</Button>
          </CardActions>
        </Card>
        <Card style={{border: 'none', boxShadow: 'none'}}>
          <CardContent style={{padding: '0rem'}}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Weekly Event
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
            <span style={{fontSize: '0.85rem'}}>Thrusday, 27 Nov</span>
            <Button size='small' className='eventRegisterBt'>Register</Button>
          </CardActions>
        </Card>
    </Carousel>
  );
}