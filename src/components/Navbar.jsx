import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Container, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useScrollTrigger } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import DXHLogo from '../assets/DXH_logo.png';

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'scrolled',
})(({ theme, scrolled }) => ({
  backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.72)' : 'transparent',
  backdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
  WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
  boxShadow: scrolled ? '0 1px 0 rgba(0, 0, 0, 0.1)' : 'none',
  padding: scrolled ? '8px 0' : '16px 0',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  color: '#1d1d1f',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#1d1d1f',
  fontWeight: 500,
  fontSize: '0.95rem',
  textTransform: 'none',
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  opacity: 0.8,
  transition: 'opacity 0.2s ease',
  '&:hover': {
    opacity: 1,
    backgroundColor: 'transparent',
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  textTransform: 'none',
  fontWeight: 600,
  borderRadius: '20px',
  padding: '6px 16px',
  fontSize: '0.9rem',
}));

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { name: 'Products', path: '/products' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Resources', path: '/resources' },
    { name: 'Pricing', path: '/pricing' },
  ];

  return (
    <>
      <StyledAppBar scrolled={scrolled} position="fixed">
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            
            {/* Logo */}
            <Box 
              component={RouterLink} 
              to="/" 
              sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
            >
              <Box component="img" src={DXHLogo} alt="DXH Logo" sx={{ height: { xs: 32, md: 40 } }} />
            </Box>

            {/* Desktop Navigation links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
              {navLinks.map((link) => (
                <NavButton 
                  key={link.name} 
                  component={RouterLink} 
                  to={link.path}
                  sx={{ 
                    opacity: location.pathname === link.path ? 1 : 0.8,
                    fontWeight: location.pathname === link.path ? 600 : 500
                  }}
                >
                  {link.name}
                </NavButton>
              ))}
            </Box>
            
            {/* Desktop Action buttons */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <Button 
                variant="text" 
                sx={{ 
                  color: '#1d1d1f', 
                  textTransform: 'none', 
                  fontWeight: 500,
                  mr: 2
                }}
              >
                Sign in
              </Button>
              <ActionButton 
                component={RouterLink}
                to="/contact"
                variant="outlined" 
                sx={{ 
                  borderColor: 'primary.main', 
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 29, 110, 0.05)',
                    borderColor: 'primary.main',
                  }
                }}
              >
                Contact us
              </ActionButton>
              <ActionButton 
                variant="contained" 
                color="primary"
              >
                Get started
              </ActionButton>
            </Box>

            {/* Mobile Menu Toggle */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
              <IconButton
                onClick={toggleDrawer}
                sx={{ color: '#1d1d1f' }}
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
          sx: { 
            width: '100%', 
            maxWidth: 300,
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(10px)'
          },
        }}
      >
        <Box sx={{ width: '100%', p: 3, pt: 8 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.name} disablePadding sx={{ mb: 1 }}>
                <ListItemButton 
                  component={RouterLink} 
                  to={link.path} 
                  onClick={toggleDrawer}
                  sx={{ borderRadius: '12px' }}
                >
                  <ListItemText 
                    primary={link.name} 
                    primaryTypographyProps={{ 
                      fontSize: '1.2rem', 
                      fontWeight: location.pathname === link.path ? 700 : 500 
                    }} 
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button 
                fullWidth 
                variant="outlined" 
                component={RouterLink}
                to="/contact"
                onClick={toggleDrawer}
              >
                Contact us
              </Button>
              <Button 
                fullWidth 
                variant="contained" 
                onClick={toggleDrawer}
              >
                Get started
              </Button>
            </Box>
          </List>
        </Box>
      </Drawer>
      {/* Spacer to prevent content from going under the fixed AppBar */}
      <Box sx={{ height: scrolled ? '64px' : '80px', transition: 'height 0.3s' }} />
    </>
  );
};

export default Navbar;
