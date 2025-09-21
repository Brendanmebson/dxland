import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  padding: '40px 16px 40px 16px', // reduced padding for mobile
  [theme.breakpoints.up('md')]: {
    padding: '80px 0 40px 0',
  },
}));

const FooterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  maxWidth: '1200px',
  margin: '0 auto',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '0px',
  },
}));

const FooterCol = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 180,
  marginBottom: '24px',
  [theme.breakpoints.up('md')]: {
    marginBottom: 0,
    paddingRight: '32px',
  },
}));

const FooterHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.1rem',
  marginBottom: '12px',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
}));

const FooterLink = styled(Typography)(({ theme }) => ({
  color: '#fff',
  fontSize: '0.95rem',
  marginBottom: '8px',
  cursor: 'pointer',
  fontWeight: 400,
  transition: 'color 0.2s',
  '&:hover': {
    color: theme.palette.secondary.main,
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
}));

const NewsletterInput = styled(TextField)(({ theme }) => ({
  background: '#fff',
  borderRadius: '24px',
  marginBottom: '12px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '24px',
    fontSize: '0.95rem',
    paddingLeft: '16px',
    paddingRight: '16px',
    height: '40px',
    [theme.breakpoints.up('md')]: {
      height: '44px',
      fontSize: '1rem',
    },
  },
}));

const SubscribeButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: '#fff',
  borderRadius: '24px',
  fontWeight: 600,
  fontSize: '0.95rem',
  textTransform: 'none',
  width: '100%',
  height: '40px',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
  [theme.breakpoints.up('md')]: {
    height: '44px',
    fontSize: '1rem',
  },
}));

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        {/* About Us */}
        <FooterCol>
          <FooterHeading>About Us</FooterHeading>
          <Typography sx={{ color: '#fff', fontSize: { xs: '0.95rem', md: '1rem' }, fontWeight: 400 }}>
            We create solutions tailored to your needs and values, "We Are, We Create".
          </Typography>
        </FooterCol>

        {/* What We Do */}
        <FooterCol>
          <FooterHeading>What We Do</FooterHeading>
          <FooterLink>Design</FooterLink>
          <FooterLink>Business Solution</FooterLink>
          <FooterLink>SaaS Solution</FooterLink>
          <FooterLink>Business Intelligence</FooterLink>
          <FooterLink>Software Development/Payment Integration</FooterLink>
        </FooterCol>

        {/* Menu */}
        <FooterCol>
          <FooterHeading>Menu</FooterHeading>
          <FooterLink>Home</FooterLink>
          <FooterLink>Services</FooterLink>
          <FooterLink>Portfolio</FooterLink>
          <FooterLink>Our Products</FooterLink>
          <FooterLink>Blog</FooterLink>
          <FooterLink>Contact Us</FooterLink>
        </FooterCol>

        {/* Get Newsletter */}
        <FooterCol>
          <FooterHeading>Get Newsletter</FooterHeading>
          <Typography sx={{ color: '#fff', fontSize: { xs: '0.95rem', md: '1rem' }, fontWeight: 400, mb: 2 }}>
            Get every single promotional & business update.
          </Typography>
          <NewsletterInput
            placeholder="Email address"
            variant="outlined"
            fullWidth
            InputProps={{
              sx: { color: '#222', background: '#fff', borderRadius: '24px' },
            }}
          />
          <SubscribeButton variant="contained">
            Subscribe Now &rarr;
          </SubscribeButton>
        </FooterCol>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
