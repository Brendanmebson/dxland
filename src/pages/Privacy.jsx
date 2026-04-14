import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const LegalHero = styled(Box)(({ theme }) => ({
  background: '#f8faff',
  padding: '160px 0 80px 0',
  textAlign: 'center',
}));

const ContentBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: '64px',
  borderRadius: '40px',
  border: '1px solid rgba(0, 29, 110, 0.05)',
  marginTop: '-40px',
  position: 'relative',
  zIndex: 1,
  boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
}));

const Privacy = () => {
  return (
    <Box sx={{ pb: 15 }}>
      <LegalHero>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ fontWeight: 900, mb: 2, fontSize: { xs: '3rem', md: '4rem' } }}>
            Privacy Policy
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400 }}>
            Last Updated: May 2024
          </Typography>
        </Container>
      </LegalHero>

      <Container maxWidth="md">
        <ContentBox>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>1. Introduction</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
            At DX Innovation Hub, we take your privacy seriously. This Policy explains how we collect, use, and protect your personal data when you interact with our platform and services.
          </Typography>
          
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>2. Data Collection</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
            We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or apply for a program. This may include your name, email address, and professional background.
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>3. How We Use Your Data</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
            Your data is used to provide and improve our services, communicate with you about your projects, and send you relevant innovation insights. We never sell your personal data to third parties.
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>4. Security</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
            We implement industry-standard security measures to protect your data from unauthorized access, loss, or alteration.
          </Typography>
        </ContentBox>
      </Container>
    </Box>
  );
};

export default Privacy;
