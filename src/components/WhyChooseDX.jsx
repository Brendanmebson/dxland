import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import VerifiedIcon from '@mui/icons-material/Verified';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PsychologyIcon from '@mui/icons-material/Psychology';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const WhyChooseSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#001D6E',
  padding: '160px 0',
  position: 'relative',
  overflow: 'hidden',
}));

const MeshGradient = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `
    radial-gradient(at 10% 20%, rgba(26, 59, 142, 0.8) 0px, transparent 50%),
    radial-gradient(at 90% 10%, rgba(0, 20, 77, 0.8) 0px, transparent 50%),
    radial-gradient(at 50% 50%, rgba(26, 59, 142, 0.4) 0px, transparent 50%)
  `,
  zIndex: 1,
});

const FeatureCard = styled(motion.div)(({ theme }) => ({
  padding: '40px',
  borderRadius: '32px',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.08)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateY(-10px)',
  },
}));

const IconBox = styled(Box)(({ theme }) => ({
  width: '56px',
  height: '56px',
  borderRadius: '16px',
  background: 'rgba(255, 235, 59, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#FFEB3B',
  marginBottom: '4px',
}));

const WhyChooseDX = () => {
  const features = [
    {
      id: 1,
      icon: <TrendingUpIcon />,
      title: 'Skill to Income',
      content: 'We bridge the gap between learning and earning, connecting verified skills directly to real-world revenue streams.',
    },
    {
      id: 2,
      icon: <VerifiedIcon />,
      title: 'Global Scalability',
      content: 'Our ecosystem empowers startups to build and deploy solutions that compete on a global stage from day one.',
    },
    {
      id: 3,
      icon: <PsychologyIcon />,
      title: 'Expert Mentorship',
      content: 'Learn from industry veterans who have built, scaled, and exited successful technology products.',
    },
    {
      id: 4,
      icon: <WorkspacePremiumIcon />,
      title: 'Real-World Impact',
      content: 'Work on projects that matter, solving social and economic challenges through innovative technology.',
    },
  ];

  return (
    <WhyChooseSection id="why-choose">
      <MeshGradient />
      
      {/* Decorative Grid */}
      <Box sx={{ 
        position: 'absolute', 
        inset: 0, 
        zIndex: 2, 
        opacity: 0.1,
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                color: 'white',
                fontWeight: 900,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 3,
                letterSpacing: '-0.03em'
              }}
            >
              Why Choose <Box component="span" sx={{ color: 'secondary.main' }}>DX?</Box>
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'rgba(255,255,255,0.7)',
                fontWeight: 400,
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              We're rewriting the rules of digital transformation by putting talent and innovation at the core of everything we do.
            </Typography>
          </motion.div>
        </Box>

        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: 4
          }}
        >
          {features.map((feature, idx) => (
            <FeatureCard
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <IconBox>
                {React.cloneElement(feature.icon, { fontSize: 'large' })}
              </IconBox>
              <Box>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: 'white', 
                    fontWeight: 800, 
                    mb: 2,
                    fontSize: '1.5rem'
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.7,
                    fontSize: '1.1rem'
                  }}
                >
                  {feature.content}
                </Typography>
              </Box>
            </FeatureCard>
          ))}
        </Box>
      </Container>
    </WhyChooseSection>
  );
};

export default WhyChooseDX;
