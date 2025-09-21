import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import aboutUs_img from '../assets/aboutUs_img.png';

const AboutUsSection = styled(Box)(({ theme }) => ({
  padding: '80px 0',
  backgroundColor: '#fff',
  marginBottom: '80px',
  [theme.breakpoints.down('sm')]: {
    padding: '60px 16px',
    marginBottom: '40px',
  },
}));

const AboutUsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

const CollageBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
}));

const AboutUs = () => {
  return (
    <AboutUsSection>
      <Container maxWidth="lg">
        <AboutUsWrapper>
          {/* Left Side: Text */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                mb: 2,
                ml: { xs: 0, md: 5 },
                textAlign: { xs: 'center', md: 'left' },
                fontSize: { xs: '2rem', sm: '2.2rem', md: '2.5rem' },
              }}
            >
              About{' '}
              <Box
                component="span"
                sx={{
                  color: theme => theme.palette.primary.main,
                  fontWeight: 700,
                }}
              >
                Us
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#757575',
                mb: 3,
                ml: { xs: 0, md: 5 },
                textAlign: { xs: 'center', md: 'left' },
                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.8rem' },
                lineHeight: 1.6,
              }}
            >
              We exist to bridge the gap between talent, startups, and technology. Our mission
              is simple: build an ecosystem where digital leaders are raised, startups are
              empowered, and innovative products become scalable solutions that impact industries
              and communities.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme => theme.palette.primary.main,
                fontWeight: 600,
                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
                ml: { xs: 0, md: 5 },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              We don’t just talk innovation — we build it, mentor it, and scale it.
            </Typography>
          </Box>

          {/* Right Side: Image */}
          <CollageBox>
            <Box
              component="img"
              src={aboutUs_img}
              alt="About Us Collage"
              sx={{
                width: '100%',
                maxWidth: { xs: 250, sm: 300, md: 350 },
                borderRadius: 0,
              }}
            />
          </CollageBox>
        </AboutUsWrapper>
      </Container>
    </AboutUsSection>
  );
};

export default AboutUs;
