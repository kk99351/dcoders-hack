import { Routes, Route, Outlet, useNavigate, useLocation } from 'react-router-dom';
import Auth from './routes/auth';
import ClippedDrawer from './routes/drawer';
import Dashboard from './routes/dashboard';
import LeaderBoard from './routes/leaderboard';
import Nav from './routes/nav';
import Contests from './routes/contests';
import { AppBar, Box, CssBaseline } from '@mui/material';
import ContestsSpecificPage from './components/contestSpecificPage';
import CodingPlayground from './components/codingPlayground';
import APTPlayground from './components/aptPlayground';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from './contexts/user.context';

const NavExtend = () => {
  return  <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: "0 2px 4px #00000012" }}>
              <Nav dark={false}></Nav>
            </AppBar>
            <Outlet />
          </Box> 
} 

const DarkNavExtend = () => {
  return  <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar style={{backgroundColor: '#1f1f1f'}} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: "0 2px 4px #00000012" }}>
              <Nav dark={true} ></Nav>
            </AppBar>
            <Outlet />
          </Box> 
}

function App() {
  const {isLogin} = useContext(UserContext)
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(()=> {
    if (!isLogin){
      navigate('/auth')
    }else if (isLogin && location.pathname == '/auth'){
      navigate('/home')
    }
  },[isLogin])
  return (
    <>
      <Routes>
        <Route path='home' element={<ClippedDrawer />} >
          <Route index element={<Dashboard />}/>
          <Route path='dashboard' element={<Dashboard />}/>
          <Route path='leaderboard' element={<LeaderBoard />}/>
        </Route>
        <Route path='/' element={<NavExtend />} >
          <Route path='contests' element={<Contests />} />
          <Route path='contests/*' element={<ContestsSpecificPage />} />
        </Route>
        {/* <Route path='account' element={}>

        </Route> */}
        <Route path='codingPlayground' element={<DarkNavExtend />} >
          <Route path='contestId/*' element={<CodingPlayground />} />
          <Route path='potd' element={<CodingPlayground />} />
        </Route>
        <Route path='apt' element={<DarkNavExtend />}>
          <Route path='contestId/*' element={<APTPlayground />} />
          <Route path='daily' element={<APTPlayground />} />
        </Route>
        <Route path='auth' element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
