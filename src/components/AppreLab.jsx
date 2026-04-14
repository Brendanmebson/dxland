import React from 'react';
import { Box, Container, Typography, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ApprelabImg from '../assets/Apprelab_img.png';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const AppreLabSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, #ffffff 0%, #fcfdfe 100%)',
  padding: '160px 0',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    padding: '100px 0',
  },
}));

const ImageContainer = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  borderRadius: '50%',
  padding: '20px',
  background: 'rgba(0, 29, 110, 0.02)',
  border: '1px solid rgba(0, 29, 110, 0.05)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const FloatingCard = styled(motion.div)(({ theme, top, left, right, bottom }) => ({
  position: 'absolute',
  padding: '12px 20px',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(12px)',
  borderRadius: '16px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
  border: '1px solid rgba(255, 255, 255, 0.5)',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  zIndex: 2,
  top, left, right, bottom,
}));

const StepCard = styled(motion.div)(({ theme }) => ({
  padding: '24px',
  borderRadius: '24px',
  background: '#ffffff',
  border: '1px solid rgba(0, 29, 110, 0.06)',
  boxShadow: '0 4px 20px rgba(0,0,110,0.02)',
  position: 'relative',
  transition: 'all 0.3s ease',
  height: '100%',
  '&:hover': {
    boxShadow: '0 10px 30px rgba(0,0,110,0.06)',
    borderColor: theme.palette.primary.main + '22',
  },
}));

const StepNumber = styled(Box)(({ theme }) => ({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  background: theme.palette.primary.main,
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 700,
  fontSize: '0.875rem',
  marginBottom: '16px',
}));

const AppreLab = () => {
  const steps = [
    { title: 'Learn', desc: 'Take micro-courses created by industry mentors.' },
    { title: 'Project', desc: 'Real projects posted by Businesses & SMEs.' },
    { title: 'Apply', desc: 'Land projects via our exclusive WorkLab.' },
    { title: 'Guide', desc: 'Work under 1-on-1 expert mentorship.' },
    { title: 'Earn', desc: 'Everyone gets paid for successful milestones.' },
    { title: 'Hired', desc: 'Top performers get full-time offers.' },
  ];

  const features = [
    { name: 'Micro Courses', desc: 'AI-assisted, practical lessons.', color: '#001D6E' },
    { name: 'Worklab', desc: 'Real projects with milestone payments.', color: '#FFEB3B' },
    { name: 'Mentorship', desc: '1-on-1 guidance + smart matching.', color: '#FFEB3B' },
    { name: 'Micro Bootcamp', desc: 'Short, intensive live programs.', color: '#001D6E' },
  ];

  return (
    <AppreLabSection id="apprelab">
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            alignItems: 'center', 
            gap: { xs: 8, md: 10 } 
          }}
        >
          <Box sx={{ flex: 1, width: '100%' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h2" sx={{ fontWeight: 900, mb: 3, letterSpacing: '-0.03em' }}>
                Appre
                <Box component="span" sx={{ 
                  color: 'primary.main',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '8px',
                    left: 0,
                    width: '100%',
                    height: '8px',
                    background: '#FFEB3B',
                    zIndex: -1,
                    opacity: 0.8
                  }
                }}>
                  Lab
                </Box>
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: 'text.secondary', lineHeight: 1.3 }}>
                The ecosystem where <br />
                <Box component="span" sx={{ color: 'text.primary' }}>Learning power becomes Earning power.</Box>
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.2rem', lineHeight: 1.6, maxWidth: 500 }}>
                Stop learning in a vacuum. Start building real solutions for real businesses and get rewarded for your growth.
              </Typography>
              
              <Stack spacing={2} sx={{ mb: 4 }}>
                {['Skill verification', 'Global opportunities', 'Instant milestones'].map((item, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <CheckCircleOutlineIcon sx={{ color: 'primary.main', fontSize: 24 }} />
                    <Typography sx={{ fontWeight: 600, fontSize: '1.1rem' }}>{item}</Typography>
                  </Box>
                ))}
              </Stack>
            </motion.div>
          </Box>

          <Box 
            sx={{ 
              flex: 1, 
              width: '100%', 
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <ImageContainer
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              sx={{
                width: { xs: '280px', sm: '350px', md: '100%' },
                height: { xs: '280px', sm: '350px', md: 'auto' },
                margin: '0 auto'
              }}
            >
              <Box
                component="img"
                src={ApprelabImg}
                alt="AppreLab Experience"
                sx={{ 
                  width: '100%', 
                  borderRadius: '50%',
                  boxShadow: '0 40px 80px rgba(0,29,110,0.15)'
                }}
              />
              
              <FloatingCard 
                top="10%" 
                right="-5%"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                sx={{
                  padding: { xs: '8px 12px', md: '12px 20px' },
                  borderRadius: { xs: '12px', md: '16px' },
                }}
              >
                <Box sx={{ width: { xs: 24, md: 40 }, height: { xs: 24, md: 40 }, borderRadius: '50%', bgcolor: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircleOutlineIcon sx={{ color: '#fff', fontSize: { xs: 14, md: 20 } }} />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ display: 'block', fontWeight: 700, fontSize: { xs: '0.65rem', md: '0.75rem' } }}>Milestone Paid</Typography>
                  <Typography sx={{ fontWeight: 800, color: 'primary.main', fontSize: { xs: '0.75rem', md: '1rem' } }}>+$450.00</Typography>
                </Box>
              </FloatingCard>

              <FloatingCard 
                bottom="15%" 
                left="-5%"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                sx={{
                  padding: { xs: '8px 12px', md: '12px 20px' },
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 700, fontSize: { xs: '0.7rem', md: '0.875rem' } }}>New Project Access</Typography>
                <Box sx={{ px: 1, py: 0.5, bgcolor: '#FFEB3B', borderRadius: '8px', fontSize: { xs: '0.6rem', md: '0.75rem' }, fontWeight: 800 }}>WORKLAB</Box>
              </FloatingCard>
            </ImageContainer>
          </Box>
        </Box>

        <Box sx={{ mt: 15 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>
              The Road to <Box component="span" sx={{ color: 'primary.main' }}>Growth</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
              A seamless flow from novice to industry professional.
            </Typography>
          </Box>
          
          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: 3
            }}
          >
            {steps.map((step, idx) => (
              <StepCard
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <StepNumber>{idx + 1}</StepNumber>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>{step.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>{step.desc}</Typography>
              </StepCard>
            ))}
          </Box>
        </Box>

        <Paper 
          elevation={0}
          sx={{ 
            mt: 10, 
            p: { xs: 4, md: 8 }, 
            borderRadius: '40px', 
            background: 'linear-gradient(135deg, #001D6E 0%, #0a174e 100%)',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 4, textAlign: 'center' }}>
              Core <Box component="span" sx={{ color: '#FFEB3B' }}>Capabilities</Box>
            </Typography>
            <Box 
              sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                gap: 4
              }}
            >
              {features.map((f, idx) => (
                <Box key={idx} sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: f.color === '#FFEB3B' ? '#FFEB3B' : '#fff' }}>
                    {f.name}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {f.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          
          {/* Abstract light effect */}
          <Box sx={{ 
            position: 'absolute', 
            top: '-50%', 
            left: '-20%', 
            width: '100%', 
            height: '200%', 
            background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%)',
            zIndex: 0
          }} />
        </Paper>
      </Container>
    </AppreLabSection>
  );
};

export default AppreLab;
