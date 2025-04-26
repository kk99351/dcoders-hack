import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Nav from './nav';
import { Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Dashboard from './dashboard';
import { Outlet, useNavigate } from 'react-router-dom';

const drawerWidth = 300;

export default function ClippedDrawer() {
  const navigate = useNavigate()
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: "0 2px 4px #00000012" }}>
        <Nav></Nav>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', border:"none", boxShadow:'-1px 10px 20px #c5d0d833' },
        }}
      >
        <Toolbar />
        <Box sx={{ 
          overflow: 'auto', 
          display:'flex', 
          flexDirection:'column', 
          justifyContent:'space-between', 
          height:'100%',
          p: '2rem',
          pl: '4rem'
        }}>
          <List>
            <ListItem disablePadding>
                <ListItemButton className='dasboard_button dasboard_button_active'
                   sx={{borderRadius: '10px', mt: '1rem' }} onClick={() => {navigate('/home/dashboard')}}>
                  <ListItemIcon>
                    <DashboardIcon /> 
                  </ListItemIcon>
                  <ListItemText primary='Dashboard' />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton className='dasboard_button'
                   sx={{borderRadius: '10px', mt: '1rem' }} onClick={() => {navigate('/home/leaderboard')}}>
                  <ListItemIcon>
                    <LeaderboardIcon />
                  </ListItemIcon>
                  <ListItemText primary='LeaderBoard' />
                </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem disablePadding>
                <ListItemButton className='dasboard_button' 
                  sx={{borderRadius: '10px', mt: '1rem' }}>
                  <ListItemIcon>
                    <Avatar alt="Profile Pic" src="/static/images/avatar/2.jpg" />
                  </ListItemIcon>
                  <ListItemText primary="Kundan" />
                  <ListItemIcon style={{paddingLeft: '1rem'}}>
                    <MoreVertIcon />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
          </List>
        </Box>
      </Drawer>
      <Outlet />
    </Box>
  );
}
