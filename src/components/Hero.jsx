import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import HeroImage from '../assets/Hero1.png';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#f8f9fa',
  paddingTop: '80px',
  paddingBottom: '150px', // less for mobile
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    paddingTop: '60px',
    paddingBottom: '80px',
  },
}));

const HeroWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(4),
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
    gap: theme.spacing(2),
  },
}));

const WaveContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  lineHeight: 0,
  overflow: 'hidden',
  zIndex: 1,
  [theme.breakpoints.down('sm')]: {
    height: '180px',
  },
}));

const Hero = () => {
  return (
    <HeroSection>
      <Container maxWidth="lg">
        <HeroWrapper>
          {/* Left Side: Text */}
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                fontWeight: 700, 
                mb: 2,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
              }}
            >
              Transforming Ideas Into{" "}
              <Typography 
                component="span" 
                variant="inherit" 
                sx={{ color: '#001D6E' }}
              >
                Digital Scalable Product
              </Typography>
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#666', 
                mb: 4,
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                maxWidth: { xs: '100%', md: '90%' },
                mx: { xs: 'auto', md: 0 },
              }}
            >
              At DX Innovation Hub, we incubate people, platforms, and products 
              that drive digital transformation, create jobs, and solve real 
              social and economic challenges.
            </Typography>
          </Box>

          {/* Right Side: Image */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Box 
              component="img"
              src={HeroImage}
              alt="Hero"
              sx={{ 
                width: '100%',
                maxWidth: { xs: '300px', sm: '400px', md: '450px' },
                borderRadius: '16px',
              }}
            />
          </Box>
        </HeroWrapper>
      </Container>
      
      {/* Smooth Fading Wave */}
      <WaveContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 100 1440 300"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '280px' }}
        >
          <defs>
            <linearGradient id="fadeToNext" x1="0" y1="0" x2="0" y2="1">
              <stop offset="100%" stopColor="#001D6E" stopOpacity="1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>
          </defs>

          <path
            fill="url(#fadeToNext)"
            d="M0,200C160,150,320,250,480,200C640,150,800,250,960,200C1120,150,1280,250,1440,200V320H0Z"
          />
        </svg>
      </WaveContainer>
    </HeroSection>
  );
};

export default Hero;
