import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import AppStoreImg from '../assets/app-store.png';
import GooglePlayImg from '../assets/google-play.png';
import GrowthIcon from '../assets/growth-icon.png';

const CTABackground = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, #fff 60%, #f8f9fa 100%)',
  padding: '40px 16px 60px 16px',
  [theme.breakpoints.up('md')]: {
    padding: '10px 0 80px 0',
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FFEB3B',
  color: '#001D6E',
  borderRadius: '20px',
  padding: '8px 24px',
  fontWeight: 700,
  fontSize: '1rem',
  textTransform: 'none',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  '&:hover': {
    backgroundColor: '#FDD835',
  },
}));

const AppStoreButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '16px',
  flexWrap: 'wrap',
  margin: '32px 0',
}));

const JourneyCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#0a174e',
  borderRadius: '28px',
  padding: '24px 16px',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '32px auto 0 auto',
  maxWidth: 540,
  minHeight: 0,
  position: 'relative',
  boxShadow: '0 8px 32px rgba(10,23,78,0.10)',
  flexDirection: 'column', // default mobile
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '32px 32px',
    minHeight: 140,
  },
}));

const GridBg = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  borderRadius: '28px',
  zIndex: 0,
  backgroundImage: `
    linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
  `,
  backgroundSize: '32px 32px',
  pointerEvents: 'none',
}));

const CTA = () => {
  return (
    <CTABackground>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: 'center',
            mb: 2,
            mt: 1,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' },
          }}
        >
          Ready to <Box component="span" sx={{ color: '#4F46E5' }}>Download</Box>?
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: '#222',
            mb: 3,
            maxWidth: 600,
            mx: 'auto',
            fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' },
            lineHeight: 1.5,
          }}
        >
          Ready to be part of the future of digital transformation? Whether you’re a learner, mentor, SME, or startup, DX Innovation Hub is where growth happens.
        </Typography>

        <AppStoreButtons>
          <Box component="img" src={AppStoreImg} alt="Download on App Store" sx={{ height: { xs: 36, sm: 42, md: 48 } }} />
          <Box component="img" src={GooglePlayImg} alt="Get it on Google Play" sx={{ height: { xs: 36, sm: 42, md: 48 } }} />
        </AppStoreButtons>

        <JourneyCard>
          <GridBg />
          <Box sx={{ zIndex: 1, flex: 1, width: '100%' }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.3rem', sm: '1.6rem', md: '2rem' },
                mb: 2,
                lineHeight: 1.2,
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              Start Your Journey<br />With Us Now
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
              <CTAButton sx={{ mt: 1, mb: 0, fontSize: { xs: '0.85rem', sm: '0.95rem' }, px: 2, py: 0.5 }}>
                Start Now
              </CTAButton>
            </Box>
          </Box>

          <Box
            sx={{
              zIndex: 1,
              mt: { xs: 3, sm: 0 },
              ml: { xs: 0, sm: 3 },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: { xs: 80, sm: 100, md: 110 },
                height: { xs: 80, sm: 100, md: 110 },
                borderRadius: '50%',
                background: '#e8ebfa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                component="img"
                src={GrowthIcon}
                alt="Growth"
                sx={{ width: { xs: 45, sm: 55, md: 60 }, height: { xs: 45, sm: 55, md: 60 } }}
              />
            </Box>
          </Box>
        </JourneyCard>
      </Container>
    </CTABackground>
  );
};

export default CTA;
