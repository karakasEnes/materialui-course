import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import logo from '../../public/assets/logo.svg';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useState } from 'react';
const useStyles = makeStyles((theme) => ({
  toolBarMargin: {
    ...theme.mixins.toolbar,
  },

  logo: {
    height: '3em',
  },

  tab: {
    // fontFamily: 'Raleway',
    textTransform: 'none',
    fontWeight: 700,
    color: 'white',
    fontSize: '1rem',
  },
}));

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Header() {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (e, value) => {
    setTabValue(value);
  };

  return (
    <>
      <ElevationScroll>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar color='secondary' position='static'>
            <Toolbar disableGutters>
              {/* <Image className={classes.logo} src={logo} alt='logo' /> problem with className */}
              <Image src={logo} alt='logo' />

              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                indicatorColor='secondary'
              >
                <Tab className={classes.tab} label='Home' />
                <Tab className={classes.tab} label='Home2' />
                <Tab className={classes.tab} label='Home3' />
              </Tabs>
            </Toolbar>
          </AppBar>
        </Box>
      </ElevationScroll>
    </>
  );
}

export default Header;
