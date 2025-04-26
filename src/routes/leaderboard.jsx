import { Typography } from '@material-tailwind/react'
import { Avatar, Box, Card, CardContent, CardHeader, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import PointIcon from '@mui/icons-material/MonetizationOn';
import React from 'react'

export default function LeaderBoard() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
        <div className='dashboard-div'>
          <Card sx={{ maxWidth: 700 }}>
            <CardHeader
              title="Daily leaderboard."
              sx={{padding: '1.5rem 3rem'}}
              subheader="Solve problems, earn EXP & stay on the top."
              titleTypographyProps={{variant:'h6'}}
            />
            <CardContent sx={{py:'0'}}>
            <List sx={{py:'0rem'}}>
              <ListItem disablePadding 
                sx={{py:'0.3rem'}}
                secondaryAction={
                  <IconButton aria-label="points" sx={{fontSize: '16px', backgroundColor: '#fff6e4'}} >
                  <PointIcon style={{
                      fontSize: '20px',
                      verticalAlign: 'sub',
                      color: '#ffc147',
                    }} /> 23
                  </IconButton>
                }>
                  <ListItemIcon>
                    <>
                      <p style={{paddingRight: '.8rem'}}>1<sup>st</sup>. </p>
                      <Avatar sx={{ bgcolor: '#699f39', width: '1.5rem', height:'1.5rem' }} aria-label="recipe">
                        1
                      </Avatar>
                    </>
                  </ListItemIcon>
                  <ListItemText sx={{px: '1rem'}} primary="Kundan" />
              </ListItem>
              <ListItem disablePadding 
                sx={{py:'0.3rem'}}
                secondaryAction={
                  <IconButton aria-label="points" sx={{fontSize: '16px', backgroundColor: '#fff6e4'}} >
                  <PointIcon style={{
                      fontSize: '20px',
                      verticalAlign: 'sub',
                      color: '#ffc147',
                    }} /> 23
                  </IconButton>
                }>
                  <ListItemIcon>
                    <>
                      <p style={{paddingRight: '.8rem'}}>1<sup>st</sup>. </p>
                      <Avatar sx={{ bgcolor: '#699f39', width: '1.5rem', height:'1.5rem' }} aria-label="recipe">
                        1
                      </Avatar>
                    </>
                  </ListItemIcon>
                  <ListItemText sx={{px: '1rem'}} primary="Kundan" />
              </ListItem>
            </List>
            </CardContent>
          </Card>
        </div>
    </Box>
  )
}
