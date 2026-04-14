import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Avatar, IconButton, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const TestimonialsSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#fcfdfe',
  padding: '160px 0',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    padding: '100px 0',
  },
}));

const SliderWrapper = styled(Box)({
  position: 'relative',
  marginTop: '64px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

const TestimonialCard = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ theme, active }) => ({
  borderRadius: '32px',
  padding: '48px',
  background: active ? '#001D6E' : '#ffffff',
  color: active ? '#ffffff' : '#1d1d1f',
  border: active ? 'none' : '1px solid rgba(0, 29, 110, 0.08)',
  boxShadow: active 
    ? '0 30px 60px rgba(0,29,110,0.15)' 
    : '0 10px 30px rgba(0,0,0,0.03)',
  width: '100%',
  maxWidth: '800px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  zIndex: active ? 2 : 1,
}));

const NavButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#ffffff',
  color: '#001D6E',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  border: '1px solid rgba(0,29,110,0.05)',
  '&:hover': {
    backgroundColor: '#f8f9fa',
    transform: 'scale(1.1)',
  },
  transition: 'all 0.2s ease',
}));

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Amelia Joseph',
      position: 'Tech Lead @ Innovate',
      avatar: '/avatar1.jpg',
      content: 'DXHub transformed how we approach digital strategy. Their team doesn’t just deliver code; they deliver solutions that actually move the needle for our business.',
    },
    {
      id: 2,
      name: 'Jacob Joshua',
      position: 'Founder, AppreLab',
      avatar: '/avatar2.jpg',
      content: 'The mentorship and technical support we received from the hub were pivotal in launching our platform. They truly understand the startup lifecycle.',
    },
    {
      id: 3,
      name: 'Sarah Chen',
      position: 'Director of Product',
      avatar: '/avatar3.jpg',
      content: 'I highy recommend DXHub for any enterprise looking to modernize their stack. Their attention to detail and performance-first mindset is unmatched.',
    },
  ];

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <TestimonialsSection id="testimonials">
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'flex-end' }} spacing={4}>
          <Box>
            <Typography variant="overline" sx={{ letterSpacing: '0.2em', fontWeight: 800, color: 'primary.main', mb: 1, display: 'block' }}>
              TESTIMONIALS
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: '-0.02em' }}>
              Trusted by <Box component="span" sx={{ color: 'primary.main' }}>Industry Leaders</Box>
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <NavButton onClick={handlePrev} size="large">
              <ArrowBackIosNewIcon />
            </NavButton>
            <NavButton onClick={handleNext} size="large">
              <ArrowForwardIosIcon />
            </NavButton>
          </Box>
        </Stack>

        <SliderWrapper>
          <Box sx={{ width: '100%', maxWidth: '800px', minHeight: '400px', display: 'flex', alignItems: 'center' }}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <TestimonialCard
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 }
                }}
                active={true}
              >
                <FormatQuoteIcon sx={{ 
                  fontSize: '80px', 
                  position: 'absolute', 
                  top: '20px', 
                  right: '40px', 
                  opacity: 0.1,
                  color: 'inherit'
                }} />
                
                <Typography variant="h5" sx={{ 
                  lineHeight: 1.6, 
                  fontWeight: 500, 
                  fontSize: { xs: '1.25rem', md: '1.75rem' },
                  fontStyle: 'italic'
                }}>
                  "{testimonials[index].content}"
                </Typography>

                <Stack direction="row" spacing={3} alignItems="center">
                  <Avatar 
                    src={testimonials[index].avatar} 
                    sx={{ width: 64, height: 64, border: '3px solid rgba(255,255,255,0.2)' }} 
                  />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                      {testimonials[index].name}
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.7, fontWeight: 500 }}>
                      {testimonials[index].position}
                    </Typography>
                  </Box>
                </Stack>
              </TestimonialCard>
            </AnimatePresence>
          </Box>
        </SliderWrapper>
        
        {/* Pagination Dots */}
        <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 6 }}>
          {testimonials.map((_, i) => (
            <Box
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              sx={{
                width: i === index ? '32px' : '12px',
                height: '12px',
                borderRadius: '6px',
                bgcolor: i === index ? 'primary.main' : 'rgba(0,29,110,0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </Stack>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;
