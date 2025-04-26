import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CodeIcon from '@mui/icons-material/Code';
import PointIcon from '@mui/icons-material/MonetizationOn';
import { useNavigate } from 'react-router-dom';

const pages = ['Contests', 'Aptitude'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function  Nav(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static"
        style={{
          backgroundColor: props.dark === true? '#1f1f1f' : '#fff',
          color: '#36393e',
          boxShadow: 'none'
        }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <CodeIcon sx={{ display: { xs: 'none', md: 'flex', 
                            color: '#fb813e', 
                            backgroundColor: '#414141',
                            borderRadius: '50%', 
                            padding: '0.1rem'},
                      mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => {navigate('/home')}}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Poppins',
                fontWeight: 600,
                color: '#fb813e',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              D'<b>Coders</b>
            </Typography>
            
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <CodeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <span
                  onClick={() => {
                    navigate('/contests')
                    handleCloseNavMenu()
                  }}
                  style={{ display: 'block', 
                        fontFamily:'Figtree',
                        color: props.dark === true? '#ffffff' : '#36393e',
                        margin: '0.8rem', cursor: 'pointer' }}
                >
                  Contests
                </span>
                <span
                  onClick={() => {
                    navigate('/apt/daily')
                    handleCloseNavMenu()
                  }}
                  style={{ display: 'block', 
                        fontFamily:'Figtree',
                        color: props.dark === true? '#ffffff' : '#36393e',
                        margin: '0.8rem', cursor:'pointer' }}
                >
                  Aptitude
                </span>
            </Box>
              
            <Box sx={{ flexGrow: 0 }}>
              <Button
                style={{
                  backgroundColor: '#5780e9',
                  textTransform: 'none',
                  color: '#fff',
                  margin: '0rem 1rem'
                }}
                onClick={() => {navigate('/codingPlayground/potd')}}
                >
                Problem Of the Day
              </Button>
              <div className='moving-border'>
                <span>
                  Your EXP
                  <span style={{
                    backgroundColor: 'white',
                    padding: '0.2rem'
                  }}>
                  <PointIcon style={{
                    fontSize: '20px',
                    verticalAlign: 'sub',
                    color: '#ffc147'
                  }} /> 23
                  </span>
                </span>
              </div>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Nav;
