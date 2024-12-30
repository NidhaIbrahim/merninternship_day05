import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
      <div>
          <Box sx={{ flexGrow: 1 }}>
              <AppBar color='error'>
                  <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <IconButton
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          sx={{ mr: 2 }}
                      >
                          <MenuIcon />
                      </IconButton>
                      <Typography variant="h6" component="div" sx={{ flexGrow: 1 , fontWeight: 'bold', fontStyle:'' }}>
                          Employee
                      </Typography>
                      <Link to='/add'>
                          <Button variant="text" sx={{ color:"white" }} >Add Employee</Button>
                      </Link>
                      <Link to='/view'>
                          <Button variant="text" sx={{ color: "white" }}>View Employee</Button>
                      </Link>
                  </Toolbar>
              </AppBar>
          </Box>

    </div>
  )
}

export default Navbar