import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const WhyChooseSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#001D6E',
  padding: '120px 0',
  position: 'relative',
  overflow: 'hidden',
}));

const DiagonalBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(135deg, rgba(0,0,0,0.2) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2) 75%, transparent 75%, transparent)',
  backgroundSize: '100px 100px',
  opacity: 0.3,
  zIndex: 1,
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: '24px',
  borderRadius: '12px',
  backgroundColor: 'rgba(255, 255, 250, 0.95)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flex: '1 1 45%', // allows two cards per row with spacing
  minWidth: '280px',
  margin: '10px',
  height: '100%',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const CardsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '40px',
}));

const WhyChooseDX = () => {
  const features = [
    {
      id: 1,
      content: 'We are not just another training platform, we connect skill to real income',
    },
    {
      id: 2,
      content: 'We help startups build solutions that scale globally.',
    },
    {
      id: 3,
      content: 'We provide mentorship from industry experts who have built successful products',
    },
    {
      id: 4,
      content: 'We offer real-world projects with real compensation for your work',
    },
  ];

  return (
    <WhyChooseSection>
      <DiagonalBackground />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography 
          variant="h3" 
          component="h2" 
          sx={{ 
            textAlign: 'center', 
            mb: 3,
            color: 'white',
            fontWeight: 600,
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          Why Choose DX?
        </Typography>
        
        <Typography 
          variant="h6" 
          component="p" 
          sx={{ 
            textAlign: 'center', 
            mb: 6,
            color: 'white',
            fontWeight: 400,
            fontSize: { xs: '1.1rem', md: '1.25rem' },
          }}
        >
          We're not just another training platform, We:
        </Typography>

        <CardsContainer>
          {features.map((feature) => (
            <FeatureCard key={feature.id} elevation={2}>
              <Typography 
                variant="body1" 
                sx={{ fontSize: { xs: '1.15rem', md: '1.25rem' }, color: '#000' }}
              >
                {feature.content.includes('skill to real income') ? (
                  <>
                    We are not just another training platform, we connect <Box component="span" sx={{ fontWeight: 'bold' }}>skill</Box> to real <Box component="span" sx={{ fontWeight: 'bold', color: '#001D6E' }}>income</Box>
                  </>
                ) : (
                  feature.content
                )}
              </Typography>
            </FeatureCard>
          ))}
        </CardsContainer>
      </Container>
    </WhyChooseSection>
  );
};

export default WhyChooseDX;
