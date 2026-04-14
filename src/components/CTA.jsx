import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import AppStoreImg from '../assets/app-store.png';
import GooglePlayImg from '../assets/google-play.png';
import GrowthIcon from '../assets/growth-icon.png';

const CTASection = styled(Box)(({ theme }) => ({
  background: '#ffffff',
  padding: '160px 0',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    padding: '100px 0',
  },
}));

const AppButton = styled(Box)(({ theme }) => ({
  height: '48px',
  cursor: 'pointer',
  transition: 'transform 0.2s ease, opacity 0.2s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    opacity: 0.9,
  },
  [theme.breakpoints.down('sm')]: {
    height: '40px',
  },
}));

const JourneyCard = styled(motion.div)(({ theme }) => ({
  backgroundColor: '#001D6E',
  borderRadius: '40px',
  padding: '64px',
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 40px 80px rgba(0,29,110,0.2)',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    padding: '48px 32px',
    textAlign: 'center',
    gap: '40px',
  },
}));

const GridBg = styled(Box)({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  backgroundImage: `
    linear-gradient(0deg, rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
  `,
  backgroundSize: '32px 32px',
  pointerEvents: 'none',
});

const GlowingBlob = styled(motion.div)({
  position: 'absolute',
  width: '300px',
  height: '300px',
  background: 'radial-gradient(circle, rgba(255, 235, 59, 0.15) 0%, transparent 70%)',
  filter: 'blur(40px)',
  zIndex: 0,
  pointerEvents: 'none',
});

const CTA = () => {
  return (
    <CTASection id="download">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" sx={{ 
              fontWeight: 900, 
              mb: 3, 
              fontSize: { xs: '2.5rem', md: '3.75rem' },
              letterSpacing: '-0.03em'
            }}>
              Ready to <Box component="span" sx={{ color: 'primary.main' }}>Scale?</Box>
            </Typography>
            <Typography variant="body1" sx={{ 
              color: 'text.secondary', 
              fontSize: '1.25rem', 
              maxWidth: '600px', 
              mx: 'auto',
              lineHeight: 1.6
            }}>
              Join the future of digital transformation. Whether you’re a learner, mentor, or startup, your journey to impact starts here.
            </Typography>
            
            <Stack direction="row" spacing={3} justifyContent="center" sx={{ mt: 5 }}>
              <AppButton component="img" src={AppStoreImg} alt="App Store" />
              <AppButton component="img" src={GooglePlayImg} alt="Google Play" />
            </Stack>
          </motion.div>
        </Box>

        <JourneyCard
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <GridBg />
          <GlowingBlob 
            animate={{ 
              x: [0, 100, 0], 
              y: [0, 50, 0] 
            }} 
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            sx={{ top: '-100px', right: '-100px' }}
          />
          
          <Box sx={{ position: 'relative', zIndex: 1, flex: 1 }}>
            <Typography variant="h3" sx={{ 
              fontWeight: 800, 
              mb: 3, 
              fontSize: { xs: '2rem', md: '3rem' },
              lineHeight: 1.1
            }}>
              Start Your Journey <br />
              With Us Now
            </Typography>
            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: '#FFEB3B', 
                color: '#001D6E',
                fontSize: '1.1rem',
                px: 5,
                py: 1.5,
                borderRadius: '16px',
                fontWeight: 800,
                '&:hover': {
                  bgcolor: '#FDD835',
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              Get Started Now
            </Button>
          </Box>

          <Box sx={{ 
            position: 'relative', 
            zIndex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <motion.div
              animate={{ 
                rotate: [0, 10, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Box sx={{ 
                width: { xs: 160, md: 220 }, 
                height: { xs: 160, md: 220 }, 
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '50%',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <Box component="img" src={GrowthIcon} sx={{ width: '50%', height: '50%' }} />
              </Box>
            </motion.div>
          </Box>
        </JourneyCard>
      </Container>
    </CTASection>
  );
};

export default CTA;
