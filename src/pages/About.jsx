import React from 'react';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import AboutUs from '../components/AboutUs';
import CTA from '../components/CTA';

const PageHero = styled(Box)(({ theme }) => ({
  background: '#001D6E',
  color: 'white',
  padding: '160px 0 100px 0',
  textAlign: 'center',
}));

const About = () => {
  return (
    <Box>
      <PageHero>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ fontWeight: 900, mb: 3, fontSize: { xs: '3rem', md: '4.5rem' }, letterSpacing: '-0.04em' }}>
            Who We <Box component="span" sx={{ color: 'secondary.main' }}>Are</Box>
          </Typography>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 400, lineHeight: 1.6 }}>
            A collective of innovators, engineers, and visionaries dedicated to building Africa's digital future.
          </Typography>
        </Container>
      </PageHero>
      
      <AboutUs />
      
      <Box sx={{ py: 15, bgcolor: '#fcfdfe' }}>
        <Container maxWidth="lg">
          <Box 
            sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
              gap: 8,
              alignItems: 'center'
            }}
          >
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 900, mb: 4 }}>Our Vision</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.2rem', lineHeight: 1.8, mb: 4 }}>
                To become the premier launchpad for digital innovation in Africa, creating a seamless ecosystem where talent meets opportunity at scale.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.2rem', lineHeight: 1.8 }}>
                We believe that the next generation of global tech leaders will emerge from Africa, and we are here to provide the infrastructure, mentorship, and capital to make that a reality.
              </Typography>
            </Box>
            <Box sx={{ 
              height: '400px', 
              borderRadius: '40px', 
              bgcolor: 'rgba(0,29,110,0.05)', 
              overflow: 'hidden' 
            }}>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80" 
                alt="Vision" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <CTA />
    </Box>
  );
};

export default About;
