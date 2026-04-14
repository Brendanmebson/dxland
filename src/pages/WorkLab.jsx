import React from 'react';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import AppreLabSection from '../components/AppreLab';
import WhyChooseDX from '../components/WhyChooseDX';

const WorkLabHero = styled(Box)(({ theme }) => ({
  background: '#001D6E',
  color: 'white',
  padding: '160px 0 100px 0',
  textAlign: 'center',
}));

const WorkLab = () => {
  return (
    <Box>
      <WorkLabHero>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ letterSpacing: '0.4em', color: 'secondary.main', fontWeight: 800 }}>
            THE WORKLAB EXPERIENCE
          </Typography>
          <Typography variant="h1" sx={{ fontWeight: 900, mt: 2, mb: 3, fontSize: { xs: '3rem', md: '4.5rem' }, letterSpacing: '-0.04em' }}>
            Where Talent Meets <Box component="span" sx={{ color: 'secondary.main' }}>Real Projects</Box>
          </Typography>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 400, lineHeight: 1.6 }}>
            The exclusive platform for AppreLab graduates to apply their skills, build portfolios, and get paid for real-world impact.
          </Typography>
          <Button 
            variant="contained" 
            sx={{ 
              mt: 6, 
              bgcolor: 'secondary.main', 
              color: 'primary.main', 
              fontWeight: 800, 
              px: 6, 
              py: 2, 
              borderRadius: '20px',
              fontSize: '1.1rem'
            }}
          >
            Access WorkLab Dashboard
          </Button>
        </Container>
      </WorkLabHero>
      
      <AppreLabSection />
      
      <WhyChooseDX />

      <Box sx={{ py: 15, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 4 }}>Ready to Start?</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.2rem', mb: 6 }}>
            Join the WorkLab today and become part of Africa's most elite group of digital executioners.
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            sx={{ 
              borderRadius: '20px', 
              px: 8, 
              py: 2.5, 
              fontWeight: 900,
              fontSize: '1.2rem',
              boxShadow: '0 20px 40px rgba(0, 29, 110, 0.2)'
            }}
          >
            Apply for Membership
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default WorkLab;
