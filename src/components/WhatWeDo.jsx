import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import DevicesIcon from '@mui/icons-material/Devices';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import talentIncubationImg from '../assets/WhatWeDo_img1.png';
import platformIncubationImg from '../assets/WhatWeDo_img2.png';
import productInnovationImg from '../assets/WhatWeDo_img3.png';

const WhatWeDoSection = styled(Box)(() => ({
  background: 'linear-gradient(135deg, #001D6E 0%, #0A1B40 100%)',
  padding: '140px 0',
  color: 'white',
  position: 'relative',
  overflow: 'hidden',
  marginBottom: '20px',
}));

// Giant faint "S" background
const BackgroundShape = styled('div')(() => ({
  position: 'absolute',
  top: '-10%',
  left: '-20%',
  width: '160%',
  height: '160%',
  zIndex: 0,
  opacity: 0.96,
  transform: 'rotate(-20deg)',
  pointerEvents: 'none',
  '& svg': {
    width: '100%',
    height: '100%',
  },
}));

const ServiceCard = styled(Card)(() => ({
  borderRadius: '20px',
  overflow: 'hidden',
  height: '100%',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
  transition: 'all 0.3s ease',
  position: 'relative',
  zIndex: 1,
  '&:hover': {
    transform: 'translateY(-6px) scale(1.01)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
  },
}));

const ImageWrapper = styled(Box)(() => ({
  padding: '10px',
  borderRadius: '16px',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0))',
}));

const ServiceIcon = styled(Box)(({ bgcolor }) => ({
  width: '54px',
  height: '54px',
  borderRadius: '14px',
  background: `linear-gradient(135deg, ${bgcolor}, #ffffff22)`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  marginRight: '12px',
}));

const WhatWeDo = () => {
  const services = [
    {
      title: 'Talent Incubation',
      description:
        'We nurture individuals with the right skills and mentorship, equipping them to become the next generation of digital leaders ready to create impact.',
      image: talentIncubationImg,
      iconColor: '#8B5CF6',
      icon: <SchoolIcon sx={{ color: 'white', fontSize: '26px' }} />,
    },
    {
      title: 'Platform Incubation',
      description:
        'We empower startups and enterprises by providing platforms that accelerate growth, strengthen innovation, and foster scalability.',
      image: platformIncubationImg,
      iconColor: '#6366F1',
      icon: <DevicesIcon sx={{ color: 'white', fontSize: '26px' }} />,
    },
    {
      title: 'Product Innovation',
      description:
        'We transform bold ideas into digital products, delivering scalable solutions that solve real social and economic challenges.',
      image: productInnovationImg,
      iconColor: '#EC4899',
      icon: <LightbulbIcon sx={{ color: 'white', fontSize: '26px' }} />,
    },
  ];

  return (
    <WhatWeDoSection>
      {/* Background S */}
      <BackgroundShape>
        <svg viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <path
            d="M200,300 
               C400,50 800,50 1000,300 
               C1200,550 600,650 400,900 
               C200,1150 1000,1150 1000,900"
            fill="none"
            stroke="rgba(0, 102, 255, 0.25)"
            strokeWidth="120"
            strokeLinecap="round"
          />
        </svg>
      </BackgroundShape>

      <Container maxWidth={false} sx={{ width: '100%', px: { xs: 2, md: 6 } }}>
        {/* Heading */}
        <Typography
          variant="h3"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 8,
            fontWeight: 700,
            letterSpacing: '1px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          What We{' '}
          <Box component="span" sx={{ color: '#1a2dd6', textShadow: '0 2px 6px rgba(0,0,0,0.4)' }}>
            Do
          </Box>
        </Typography>

        {/* Cards */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            alignItems: 'center', // centers cards horizontally on mobile
            gap: { xs: 5, md: 6 },
            flexWrap: 'wrap',
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                flex: '0 1 320px',
                maxWidth: '320px',
                width: '100%',
                margin: '0 auto', // center card in mobile view
              }}
            >
              <ServiceCard>
                <ImageWrapper>
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image}
                    alt={service.title}
                    sx={{ borderRadius: '12px', boxShadow: '0 6px 15px rgba(0,0,0,0.2)' }}
                  />
                </ImageWrapper>

                <CardContent sx={{ p: 3, textAlign: { xs: 'center', md: 'left' } }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    <ServiceIcon bgcolor={service.iconColor}>{service.icon}</ServiceIcon>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        color: service.iconColor,
                        letterSpacing: '0.5px',
                        mt: { xs: 1, md: 0 },
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#f1f1f1',
                      textAlign: 'justify',
                      lineHeight: 1.6,
                      fontSize: { xs: '0.95rem', sm: '1rem' },
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </ServiceCard>
            </Box>
          ))}
        </Box>
      </Container>
    </WhatWeDoSection>
  );
};

export default WhatWeDo;
