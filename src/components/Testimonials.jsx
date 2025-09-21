import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Avatar, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TestimonialsSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#f8f9fa',
  padding: '80px 0',
}));

const CardsRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '24px',
  alignItems: 'flex-start',
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  overflowX: 'auto', // optional: allow scrolling on small screens
  scrollbarWidth: 'none', // Firefox
  '&::-webkit-scrollbar': { display: 'none' }, // Chrome/Safari
}));

const TestimonialCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'primary', // prevent 'primary' from going to DOM
})(({ theme, primary }) => ({
  borderRadius: '20px',
  padding: '28px 24px',
  minWidth: 320,
  maxWidth: 350,
  background: primary ? '#0a174e' : '#fff',
  color: primary ? '#fff' : '#222',
  boxShadow: primary
    ? '0 4px 24px rgba(10,23,78,0.10)'
    : '0 4px 24px rgba(10,23,78,0.04)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  flexShrink: 0, // ensures consistent sizing in flex container
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#fff',
  boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
  margin: '0 8px',
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
}));

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Amelia Joseph',
      position: 'Chief Manager',
      avatar: '/avatar1.jpg',
      content: 'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.',
    },
    {
      id: 2,
      name: 'Jacob Joshua',
      position: 'Chief Manager',
      avatar: '/avatar2.jpg',
      content: 'I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it’s got to be Embrace!',
    },
    {
      id: 3,
      name: 'Jacob Joshua',
      position: 'Chief Manager',
      avatar: '/avatar3.jpg',
      content: 'Embrace really nails it! Creative brilliance, approachable style. They’re the partners you want—artistry meets strategy. Thrilled with what they achieved!',
    },
  ];

  // Show 3 cards at a time, sliding by 1
  const getVisibleTestimonials = () => {
    const arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push(testimonials[(activeIndex + i) % testimonials.length]);
    }
    return arr;
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [activeIndex]);

  return (
    <TestimonialsSection>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ fontWeight: 600, mb: 0 }}
          >
            What Our Client Said About Us
          </Typography>
          <Box>
            <NavigationButton onClick={handlePrev}>
              <ArrowBackIosNewIcon fontSize="small" />
            </NavigationButton>
            <NavigationButton onClick={handleNext}>
              <ArrowForwardIosIcon fontSize="small" />
            </NavigationButton>
          </Box>
        </Box>

        <CardsRow>
          {getVisibleTestimonials().map((testimonial, idx) => (
            <TestimonialCard key={testimonial.id} primary={idx === 0}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  sx={{ width: 48, height: 48, mr: 2 }}
                />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {testimonial.position}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" sx={{ opacity: 0.95 }}>
                {testimonial.content}
              </Typography>
            </TestimonialCard>
          ))}
        </CardsRow>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;
