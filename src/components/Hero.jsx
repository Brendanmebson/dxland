import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import HeroImage from '../assets/Hero1.png';

const HeroSection = styled(Box)(({ theme }) => ({
  paddingTop: '60px',
  paddingBottom: '120px',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#ffffff',
  [theme.breakpoints.down('sm')]: {
    paddingTop: '40px',
    paddingBottom: '60px',
  },
}));

const Blob = styled(motion.div)(({ theme, color, top, left, size }) => ({
  position: 'absolute',
  top: top || 'auto',
  left: left || 'auto',
  width: size || '400px',
  height: size || '400px',
  backgroundColor: color,
  filter: 'blur(80px)',
  opacity: 0.15,
  borderRadius: '50%',
  zIndex: 0,
}));

const Hero = () => {
  return (
    <HeroSection>
      {/* Animated Background Blobs */}
      <Blob 
        color="#001D6E" 
        top="-100px" 
        left="-100px" 
        size="600px"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <Blob 
        color="#FFEB3B" 
        top="40%" 
        left="70%" 
        size="500px"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            alignItems: 'center', 
            gap: 8 
          }}
        >
          {/* Left Side: Content */}
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                  lineHeight: 1.1,
                  mb: 3,
                  fontWeight: 800,
                  color: '#1d1d1f'
                }}
              >
                Transforming Ideas Into <br />
                <Box component="span" sx={{ color: 'primary.main' }}>
                  Digital Scalable Products
                </Box>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.secondary', 
                  mb: 5,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  maxWidth: { xs: '100%', md: '540px' },
                  mx: { xs: 'auto', md: 0 },
                  lineHeight: 1.6
                }}
              >
                At DX Innovation Hub, we incubate people, platforms, and products 
                that drive digital transformation, create jobs, and solve real 
                social and economic challenges.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2} 
                justifyContent={{ xs: 'center', md: 'flex-start' }}
              >
                <Button 
                  variant="contained" 
                  size="large" 
                  sx={{ 
                    px: 4, 
                    py: 1.5, 
                    fontSize: '1.1rem',
                    boxShadow: '0 10px 20px rgba(0, 29, 110, 0.15)'
                  }}
                >
                  Start Your Journey
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  sx={{ 
                    px: 4, 
                    py: 1.5, 
                    fontSize: '1.1rem',
                    borderColor: 'rgba(0,0,0,0.1)',
                    color: '#1d1d1f',
                    '&:hover': {
                      borderColor: 'rgba(0,0,0,0.2)',
                      backgroundColor: 'rgba(0,0,0,0.02)'
                    }
                  }}
                >
                  View Case Studies
                </Button>
              </Stack>
            </motion.div>
          </Box>

          {/* Right Side: Image/Visual */}
          <Box 
            sx={{ 
              flex: 1, 
              position: 'relative',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: { xs: 4, md: 0 }
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <Box 
                sx={{ 
                  position: 'relative',
                  width: { xs: '80%', sm: '60%', md: '100%' },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '10%',
                    right: '-5%',
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle, rgba(0,29,110,0.05) 0%, transparent 70%)',
                    zIndex: -1
                  }
                }}
              >
                <Box 
                  component="img"
                  src={HeroImage}
                  alt="DX Innovation Hub"
                  sx={{ 
                    width: '100%',
                    maxWidth: '560px',
                    height: 'auto',
                    borderRadius: '24px',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
                    display: 'block'
                  }}
                />
              </Box>
            </motion.div>
            
            {/* Small floating card animation */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                position: 'absolute',
                bottom: '10%',
                left: '0%',
                padding: '12px',
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                border: '1px solid rgba(255,255,255,0.2)',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transform: 'scale(0.8)'
              }}
            >
              <Box sx={{ width: 32, height: 32, bgcolor: 'secondary.main', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>
                🚀
              </Box>
              <Box>
                <Typography variant="caption" sx={{ fontWeight: 700, color: 'primary.main', display: 'block', lineHeight: 1 }}>
                  100+ Projects
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.65rem' }}>
                  Incubated successfully
                </Typography>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </HeroSection>
  );
};

export default Hero;
