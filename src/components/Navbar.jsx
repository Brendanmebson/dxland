import React, { useState } from 'react';
import { AppBar, Toolbar, Container, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import DXHLogo from '../assets/DXH_logo.png';

// Custom styled AppBar
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'white',
  boxShadow: 'none',
  padding: '10px 0',
}));

// Nav button for menu links
const NavButton = styled(Button)(({ theme }) => ({
  color: '#333',
  fontWeight: 500,
  fontSize: '1.2rem',
  textTransform: 'none',
  marginLeft: theme.spacing(3),
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: 'transparent',
  },
}));

// Action button for "Sign in" and "Get started"
const ActionButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '1.1rem',
}));

// Special styling just for Contact Us
const ContactButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '1.1rem',
  border: `2px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  borderRadius: '25px',
  padding: '6px 18px',
  transition: 'all 0.4s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
}));

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = ['Products', 'Solutions', 'Resources', 'Pricing'];

  return (
    <>
      <StyledAppBar position="static">
        <Container maxWidth={false} sx={{ width: '100%', px: { xs: 2, md: 4 } }}>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', width: '100%' }}>
            
            {/* Logo */}
            <Box component="img" src={DXHLogo} alt="DXH Logo" sx={{ height: 40 }} />

            {/* Desktop Navigation links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navLinks.map((link) => (
                <NavButton key={link}>{link}</NavButton>
              ))}
            </Box>
            
            {/* Desktop Action buttons */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <ActionButton variant="text">Sign in</ActionButton>
              <ContactButton>Contact us</ContactButton>
              <ActionButton variant="contained">Get started</ActionButton>
            </Box>

            {/* Mobile Hamburger Menu */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
              <ActionButton variant="text" sx={{ fontSize: '1rem' }}>
                Sign in
              </ActionButton>
              <ActionButton variant="contained" sx={{ ml: 1 }}>
                Get started
              </ActionButton>
              <IconButton
                onClick={toggleDrawer}
                edge="start"
                sx={{
                  ml: 1,
                  backgroundColor: 'white',
                  color: 'primary.main',
                  border: '1px solid primary.main',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                    color: 'white',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: { backgroundColor: 'primary.main', color: 'white', width: 250 },
        }}
      >
        <Box sx={{ width: '100%', p: 2 }}>
          <List>
            {navLinks.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} sx={{ color: 'white' }} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Sign in" sx={{ color: 'white' }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Contact us" sx={{ color: 'white' }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Get started" sx={{ color: 'white' }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
