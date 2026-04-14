import React from 'react';
import { Box, Typography, TextField, Button, Container, IconButton, Stack, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

import { Link } from 'react-router-dom';

const FooterSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#00144D',
  color: '#ffffff',
  padding: '100px 0 40px 0',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    padding: '80px 0 40px 0',
  },
}));

const FooterHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: '1.25rem',
  marginBottom: '24px',
  color: '#ffffff',
  letterSpacing: '-0.02em',
}));

const FooterLink = styled(Box)(({ theme }) => ({
  display: 'block',
  color: 'rgba(255,255,255,0.7)',
  fontSize: '1rem',
  marginBottom: '12px',
  cursor: 'pointer',
  fontWeight: 400,
  textDecoration: 'none',
  transition: 'all 0.2s ease',
  '&:hover': {
    color: '#FFEB3B',
    transform: 'translateX(4px)',
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: '#ffffff',
  backgroundColor: 'rgba(255,255,255,0.05)',
  marginRight: '12px',
  '&:hover': {
    backgroundColor: '#FFEB3B',
    color: '#001D6E',
  },
  transition: 'all 0.3s ease',
}));

const NewsletterInput = styled(TextField)(({ theme }) => ({
  background: 'rgba(255,255,255,0.05)',
  borderRadius: '16px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
    color: '#ffffff',
    '& fieldset': {
      borderColor: 'rgba(255,255,255,0.1)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255,255,255,0.3)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FFEB3B',
    },
  },
  '& .MuiInputBase-input::placeholder': {
    color: 'rgba(255,255,255,0.4)',
    opacity: 1,
  },
}));

const SubscribeButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FFEB3B',
  color: '#001D6E',
  borderRadius: '16px',
  padding: '12px 24px',
  fontWeight: 800,
  textTransform: 'none',
  fontSize: '1rem',
  '&:hover': {
    backgroundColor: '#FDD835',
    transform: 'scale(1.02)',
  },
  transition: 'all 0.2s ease',
}));

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection component="footer">
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 8 
          }}
        >
          {/* Brand Info */}
          <Box sx={{ gridColumn: { xs: 'span 1', sm: 'span 2', md: 'span 1' } }}>
            <Typography 
              variant="h4" 
              component={Link} 
              to="/" 
              sx={{ fontWeight: 900, mb: 3, letterSpacing: '-0.03em', color: 'white', textDecoration: 'none', display: 'block' }}
            >
              DX<Box component="span" sx={{ color: '#FFEB3B' }}>Hub</Box>
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 4, lineHeight: 1.7, fontSize: '1.1rem' }}>
              We empower startups and individuals to bridge the gap between innovation and reality. Our mission is to raise the next generation of digital leaders.
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <SocialButton size="small"><FacebookIcon /></SocialButton>
              <SocialButton size="small"><TwitterIcon /></SocialButton>
              <SocialButton size="small" component="a" href="https://github.com/brendanmebson" target="_blank"><GitHubIcon /></SocialButton>
              <SocialButton size="small"><LinkedInIcon /></SocialButton>
              <SocialButton size="small"><InstagramIcon /></SocialButton>
            </Box>
          </Box>

          {/* Quick Links */}
          <Box>
            <FooterHeading>Solutions</FooterHeading>
            <FooterLink component={Link} to="/solutions">Talent Incubation</FooterLink>
            <FooterLink component={Link} to="/solutions">Platform Growth</FooterLink>
            <FooterLink component={Link} to="/products">Product Strategy</FooterLink>
            <FooterLink component={Link} to="/solutions">Business Intelligence</FooterLink>
            <FooterLink component={Link} to="/worklab">WorkLab</FooterLink>
          </Box>

          <Box>
            <FooterHeading>Company</FooterHeading>
            <FooterLink component={Link} to="/about">About Us</FooterLink>
            <FooterLink component={Link} to="/team">Our Team</FooterLink>
            <FooterLink component={Link} to="/stories">Success Stories</FooterLink>
            <FooterLink component={Link} to="/resources">Resources</FooterLink>
            <FooterLink component={Link} to="/contact">Contact</FooterLink>
          </Box>

          {/* Newsletter */}
          <Box>
            <FooterHeading>Stay Ahead</FooterHeading>
            <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 3, fontSize: '1rem' }}>
              Get the latest insights on digital transformation and innovation delivered to your inbox.
            </Typography>
            <Stack spacing={2}>
              <NewsletterInput 
                fullWidth 
                placeholder="Enter your email" 
                variant="outlined" 
              />
              <SubscribeButton variant="contained">
                Subscribe Now
              </SubscribeButton>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 8, borderColor: 'rgba(255,255,255,0.05)' }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
            &copy; {currentYear} DX Innovation Hub. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Typography 
              variant="body2" 
              component={Link} 
              to="/privacy" 
              sx={{ color: 'rgba(255,255,255,0.5)', cursor: 'pointer', textDecoration: 'none', '&:hover': { color: '#FFEB3B' } }}
            >
              Privacy Policy
            </Typography>
            <Typography 
              variant="body2" 
              component={Link} 
              to="/terms" 
              sx={{ color: 'rgba(255,255,255,0.5)', cursor: 'pointer', textDecoration: 'none', '&:hover': { color: '#FFEB3B' } }}
            >
              Terms of Service
            </Typography>
          </Stack>
        </Box>
      </Container>
    </FooterSection>
  );
};

export default Footer;
