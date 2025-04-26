import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ContestCard from './ContestCard';
import EventCard from './EventCard';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function ContestTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{width: 300, bgcolor: '#fff',borderRadius: '4px', 
    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)" }} >
      <AppBar position="static" 
        style={{padding: '1rem', backgroundColor: 'transparent',
                boxShadow: 'none' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          style={{backgroundColor: '#fafbfe', color: 'black', borderRadius: '18px'}}
        >
          <Tab label="Events" {...a11yProps(0)} style={{fontSize: '0.85rem', borderRadius: '18px', textTransform: 'none'}}/>
          <Tab label="Live Contsets" {...a11yProps(1)} style={{fontSize: '0.85rem', borderRadius: '18px', textTransform: 'none'}} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{padding: '0rem'}}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <EventCard />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ContestCard />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}