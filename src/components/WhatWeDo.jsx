import React from 'react';
import { Box, Container, Typography, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import DevicesIcon from '@mui/icons-material/Devices';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import talentIncubationImg from '../assets/WhatWeDo_img1.png';
import platformIncubationImg from '../assets/WhatWeDo_img2.png';
import productInnovationImg from '../assets/WhatWeDo_img3.png';

const SectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#001D6E',
  padding: '160px 0',
  position: 'relative',
  overflow: 'hidden',
  color: '#ffffff',
}));

const StyledCard = styled(motion.div)(({ theme }) => ({
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(12px)',
  borderRadius: '32px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  overflow: 'hidden',
  position: 'relative',
  zIndex: 1,
}));

const CardGlow = styled(motion.div)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.06), transparent 40%)',
  zIndex: 0,
  pointerEvents: 'none',
});

const IconWrapper = styled(Box)(({ color }) => ({
  width: '64px',
  height: '64px',
  borderRadius: '20px',
  backgroundColor: color,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '24px',
  boxShadow: `0 12px 24px ${color}44`,
  position: 'relative',
  zIndex: 1,
}));

const InteractiveCard = ({ service, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <StyledCard
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <CardMedia
        component="img"
        height={{ xs: "180", sm: "240" }}
        image={service.image}
        alt={service.title}
        sx={{ 
          filter: 'brightness(0.9)',
          transition: 'transform 0.5s ease',
          '&:hover': { transform: 'scale(1.05)' }
        }}
      />
      <CardContent sx={{ p: 5, position: 'relative', zIndex: 1 }}>
        <IconWrapper color={service.color} sx={{ transform: 'translateZ(20px)' }}>
          {service.icon}
        </IconWrapper>
        <Typography variant="h4" sx={{ 
          fontWeight: 800, 
          mb: 2, 
          transform: 'translateZ(30px)',
          fontSize: '1.75rem'
        }}>
          {service.title}
        </Typography>
        <Typography variant="body1" sx={{ 
          color: 'rgba(255,255,255,0.7)', 
          lineHeight: 1.7, 
          fontSize: '1.1rem',
          transform: 'translateZ(10px)'
        }}>
          {service.description}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

const WhatWeDo = () => {
  const services = [
    {
      title: 'Talent Incubation',
      description: 'We nurture individuals with the right skills and mentorship, equipping them to become the next generation of digital leaders.',
      image: talentIncubationImg,
      color: '#8B5CF6',
      icon: <SchoolIcon sx={{ color: 'white', fontSize: 32 }} />,
    },
    {
      title: 'Platform Incubation',
      description: 'We empower startups and enterprises by providing platforms that accelerate growth and foster global scalability.',
      image: platformIncubationImg,
      color: '#6366F1',
      icon: <DevicesIcon sx={{ color: 'white', fontSize: 32 }} />,
    },
    {
      title: 'Product Innovation',
      description: 'We transform bold ideas into scalable digital products that solve real-world social and economic challenges.',
      image: productInnovationImg,
      color: '#EC4899',
      icon: <LightbulbIcon sx={{ color: 'white', fontSize: 32 }} />,
    },
  ];

  return (
    <SectionWrapper id="services">
      {/* Dynamic Background Pattern */}
      <Box sx={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        opacity: 0.15, 
        pointerEvents: 'none',
        zIndex: 0
      }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <radialGradient id="fade" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </Box>

      {/* Floating Decorative Elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,235,59,0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
          zIndex: 0,
        }}
        animate={{
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="overline" sx={{ 
              letterSpacing: '0.4em', 
              opacity: 0.8, 
              fontWeight: 800,
              color: 'secondary.main'
            }}>
              WHAT WE DO
            </Typography>
            <Typography variant="h2" sx={{ 
              fontWeight: 900, 
              mt: 2, 
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.75rem' },
              letterSpacing: '-0.02em'
            }}>
              Driving Innovation Across the <br />
              <Box component="span" sx={{ 
                color: 'secondary.main',
              }}>Digital Spectrum</Box>
            </Typography>
          </motion.div>
        </Box>

        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 6
          }}
        >
          {services.map((service, index) => (
            <InteractiveCard key={index} service={service} index={index} />
          ))}
        </Box>
      </Container>
    </SectionWrapper>
  );
};

export default WhatWeDo;
