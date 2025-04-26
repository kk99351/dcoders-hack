import { Typography } from '@material-tailwind/react'
import { Box, Toolbar } from '@mui/material'
import React from 'react'
import QuickLinkCard from '../components/QuickLinkCard'
import ContestCard from '../components/ContestCard'
import LeaderBoardCard from '../components/LeaderBoardCard'
import ContestTabs from '../components/ContestTabs'

export default function home() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, padding: '3rem' }}>
        <Toolbar />
        <div className='dashboard-div'>
          <Typography variant='h5'>
            Home
          </Typography>
        </div>
        <div className='contest-leader-card-div grid grid-cols-2'>
          <div>
            <div className='quickLinkCards dashboard-div'>
              <QuickLinkCard />
            </div>
          </div>
          <div>
            <div className='contestCard dashboard-div'>
              <Typography variant='paragraph' style={{paddingBottom:'1rem',fontFamily: 'Montserrat Alternates'}}>
                Contest & Events For you
              </Typography>
              <ContestTabs />
            </div>
            <div className='leaderBoardCard dashboard-div' style={{marginTop: '4rem'}}>
              <LeaderBoardCard />
            </div>
          </div>
        </div>
    </Box>
  )
}
