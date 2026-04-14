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

const Terms = () => {
  return (
    <Box sx={{ pb: 15 }}>
      <LegalHero>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ fontWeight: 900, mb: 2, fontSize: { xs: '3rem', md: '4rem' } }}>
            Terms of Service
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400 }}>
            Last Updated: May 2024
          </Typography>
        </Container>
      </LegalHero>

      <Container maxWidth="md">
        <ContentBox>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>1. Acceptance of Terms</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
            By accessing or using the DX Innovation Hub platform, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </Typography>
          
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>2. User Responsibilities</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
            Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. You agree to provide accurate and complete information.
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>3. Intellectual Property</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
            All content, trademarks, and data on this platform are the property of DX Innovation Hub or its licensors. You may not use, reproduce, or distribute any content without our express permission.
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>4. Limitation of Liability</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
            DX Innovation Hub shall not be liable for any indirect, incidental, or consequential damages arising out of your use of the platform.
          </Typography>
        </ContentBox>
      </Container>
    </Box>
  );
};

export default Terms;
