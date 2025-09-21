import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import ApprelabImg from '../assets/Apprelab_img.png';

const AppreLabSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, #fff 60%, #f8f9fa 100%)',
  padding: '60px 20px 40px 20px',
  [theme.breakpoints.up('md')]: {
    padding: '100px 0 40px 0',
  },
}));

const FlexRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '30px',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '0px',
  },
}));

const LeftCol = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    maxWidth: '48%',
    paddingRight: '2vw',
  },
}));

const RightCol = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    maxWidth: '52%',
    paddingLeft: '2vw',
  },
}));

const CircleImage = styled(Box)(({ theme }) => ({
  width: '250px',
  height: '250px',
  borderRadius: '50%',
  overflow: 'hidden',
  background: `radial-gradient(circle at 60% 40%, ${theme.palette.primary.light} 0%, #fff 100%)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 0 30px 10px ${theme.palette.primary.main}99, 
              0 0 60px 20px ${theme.palette.primary.main}4d`,
  [theme.breakpoints.up('sm')]: {
    width: '320px',
    height: '320px',
  },
  [theme.breakpoints.up('md')]: {
    width: '380px',
    height: '380px',
  },
}));

const FeatureCircle = styled(Box)(({ theme }) => ({
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  marginRight: '12px',
  flexShrink: 0,
  border: '2px solid #fff',
  boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
}));

const EmptyCircle = styled(Box)(({ theme }) => ({
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  border: `2px solid ${theme.palette.primary.main}`,
  marginRight: '12px',
  flexShrink: 0,
}));

const CoreFeaturesBox = styled(Box)(({ theme }) => ({
  background: '#fff',
  borderRadius: '16px',
  padding: '24px',
  marginTop: '40px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    padding: '40px',
    justifyContent: 'space-between',
    gap: '40px',
    maxWidth: 1000,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const FeatureTag = styled(Paper)(({ theme, bgcolor }) => ({
  padding: '6px 16px',
  borderRadius: '10px',
  backgroundColor: bgcolor || theme.palette.primary.main,
  color: bgcolor === '#FFEB3B' ? '#333' : 'white',
  display: 'inline-block',
  margin: '4px',
  fontWeight: 600,
  fontSize: '0.9rem',
  boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
}));

const AppreLab = () => {
  const steps = [
    'Learners take mentor-created micro-courses.',
    'SMEs post real projects.',
    'Learners apply via WorkLab.',
    'Mentors supervise project work.',
    'Everyone earns — learners, mentors, SMEs.',
    'SMEs hire top performers',
  ];

  const features = [
    { name: 'Micro Courses', desc: 'AI-assisted, practical lessons.', color: null },
    { name: 'Worklab', desc: 'Real projects with milestone payments.', color: '#FFEB3B' },
    { name: 'Mentorship System', desc: '1-on-1 guidance + smart matching.', color: '#FFEB3B' },
    { name: 'Micro Bootcamp', desc: 'Short, intensive live programs.', color: null },
  ];

  return (
    <AppreLabSection>
      <Container maxWidth="lg">
        <FlexRow>
          <LeftCol>
            <Typography variant="h2" sx={{ fontWeight: 1000, mb: 3 }}>
              Appre
              <Box component="span" sx={{ color: theme => theme.palette.primary.main }}>
                Lab
              </Box>
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 400, mb: 2, lineHeight: 1.3 }}>
              Where <Box component="span" sx={{ color: theme => theme.palette.primary.main }}>Learning</Box> <br />
              Meets <Box component="span" sx={{ color: theme => theme.palette.primary.main }}>Earning</Box>
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: '#666', fontSize: '1rem', lineHeight: 1.5 }}>
              Learn real skill, Work on real projects, <br /> 
              <strong>Earn real income</strong>
            </Typography>
          </LeftCol>

          <RightCol>
            <CircleImage>
              <Box
                component="img"
                src={ApprelabImg}
                alt="AppreLab"
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </CircleImage>
          </RightCol>
        </FlexRow>

        <Box sx={{ mt: 6, mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, textAlign: 'center' }}>
            How It <Box component="span" sx={{ color: theme => theme.palette.primary.main }}>Works</Box>
          </Typography>
          <Box sx={{ maxWidth: 700, mx: 'auto' }}>
            {steps.map((step, idx) => (
              <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <FeatureCircle />
                <Typography variant="body1" sx={{ color: '#222', fontSize: '1rem', fontWeight: 500 }}>
                  {step}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <CoreFeaturesBox>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
              Core Features
            </Typography>
            <Box sx={{ mb: 2 }}>
              {features.map((f, idx) => (
                <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                  <EmptyCircle />
                  <Typography variant="body2" sx={{ color: '#000', fontSize: '0.95rem' }}>
                    <Box component="span" sx={{ fontWeight: 700 }}>{f.name}:</Box> {f.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ flex: 1, mt: 4, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {features.map((feature, idx) => (
              <FeatureTag key={idx} bgcolor={feature.color}>
                {feature.name}
              </FeatureTag>
            ))}
          </Box>
        </CoreFeaturesBox>
      </Container>
    </AppreLabSection>
  );
};

export default AppreLab;
