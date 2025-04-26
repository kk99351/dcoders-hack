import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';



export default function Contests() {
  const navigate = useNavigate()
  return (
    <div style={{backgroundColor: '#f5f6fb', width: '100%'}}>
        <Box sx={{margin: 'auto 10%', padding: '3rem'}}>
            <Toolbar />
            <Typography variant="h5">Contests</Typography>
            <Typography variant="text">Live & upcoming contests</Typography>
            <div className='grid grid-cols-3'>
            {
                [...Array(7)].map((value,index) =>

                    {
                        return <Card style={{border: 'none', boxShadow: 'none', margin: '2rem', padding: '2rem'}}>
                        <CardContent style={{padding: '0rem'}}>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom
                            style={{display: 'flex', justifyContent: 'space-between'}}>
                            <span style={{color: '#f66c3b'}}>CodeRunner</span>
                            <span style={{color: index%2 == 0 ? '#65b168': '#816ecb'}}>
                                {index%2 == 0 && 'Live'}
                            </span>
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
                        <CardActions style={{display: "flex", justifyContent: 'space-between', flexDirection: 'column', gap:'1rem'}}>
                            <span style={{fontSize: '0.85rem'}}>Ending in 08:08:08</span>
                            <Button className='eventRegisterBt eventRegisterBtBig' onClick={() => {navigate('/contests/ab1')}}>Register</Button>
                        </CardActions>
                    </Card>
                    }
              )
            }
            </div>
        </Box>
    </div>
  );
}