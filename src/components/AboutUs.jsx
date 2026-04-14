import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import aboutUs_img from '../assets/aboutUs_img.png';

const AboutUsSection = styled(Box)(({ theme }) => ({
  padding: '160px 0',
  backgroundColor: '#ffffff',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    padding: '100px 0',
  },
}));

const Blob = styled(motion.div)(({ theme, color, top, left, right, bottom }) => ({
  position: 'absolute',
  width: '400px',
  height: '400px',
  background: color || theme.palette.primary.light,
  filter: 'blur(100px)',
  opacity: 0.1,
  borderRadius: '50%',
  zIndex: 0,
  top,
  left,
  right,
  bottom,
  pointerEvents: 'none',
}));

const ImageWrapper = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  flex: 1,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '20px',
    left: '20px',
    right: '-20px',
    bottom: '-20px',
    border: `2px solid ${theme.palette.primary.main}11`,
    borderRadius: '32px',
    zIndex: -1,
  },
}));

const GlassCard = styled(motion.div)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
  borderRadius: '24px',
  padding: '40px',
  border: '1px solid rgba(0, 29, 110, 0.05)',
  boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
}));

const AboutUs = () => {
  return (
    <AboutUsSection id="about">
      {/* Decorative Blobs */}
      <Blob 
        color="#001D6E22" 
        top="-100px" 
        left="-100px"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <Blob 
        color="#FFEB3B11" 
        bottom="-100px" 
        right="-100px"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            alignItems: 'center', 
            gap: { xs: 8, md: 10 } 
          }}
        >
          {/* Left Side: Image */}
          <Box 
            sx={{ 
              flex: 1, 
              width: '100%', 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <ImageWrapper
              initial={{ opacity: 0, scale: 0.9, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              sx={{
                width: { xs: '85%', sm: '70%', md: '100%' },
                margin: '0 auto'
              }}
            >
              <Box
                component="img"
                src={aboutUs_img}
                alt="About DX Innovation Hub"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '32px',
                  boxShadow: '0 30px 60px rgba(0,29,110,0.12)',
                  display: 'block',
                }}
              />
            </ImageWrapper>
          </Box>

          {/* Right Side: Text */}
          <Box sx={{ flex: 1, width: '100%' }}>
            <Stack spacing={4}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 800,
                    letterSpacing: '0.2em',
                    mb: 2,
                    display: 'block',
                    fontSize: '0.875rem',
                  }}
                >
                  WHO WE ARE
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    mb: 3,
                    fontWeight: 900,
                    fontSize: { xs: '2.75rem', md: '4rem' },
                    lineHeight: 1.1,
                    color: 'text.primary',
                    letterSpacing: '-0.03em',
                    whiteSpace: { md: 'nowrap' }
                  }}
                >
                  Pioneering the <br />
                  <Box component="span" sx={{ 
                    background: 'linear-gradient(135deg, #001D6E 0%, #1A3B8E 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    Digital Frontier
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '1.25rem',
                    lineHeight: 1.6,
                    maxWidth: '540px',
                  }}
                >
                  We are a hub where bold ideas meet world-class execution. 
                  By bridging the gap between raw talent and industry-defining technology, 
                  we're building a future where innovation scales without limits.
                </Typography>
              </motion.div>

              <GlassCard
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    fontSize: '1.2rem',
                    lineHeight: 1.6,
                    fontStyle: 'italic',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  "Our mission is to empower the next generation of digital leaders 
                  with the tools, mentorship, and opportunities they need to 
                  change the world."
                </Typography>
              </GlassCard>
            </Stack>
          </Box>
        </Box>
      </Container>
    </AboutUsSection>
  );
};

export default AboutUs;
