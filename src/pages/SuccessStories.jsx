import React from 'react';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const SuccessHero = styled(Box)(({ theme }) => ({
  background: '#ffffff',
  padding: '160px 0 80px 0',
  textAlign: 'center',
}));

const StoryCard = styled(motion.div)(({ theme }) => ({
  background: '#ffffff',
  borderRadius: '40px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  border: '1px solid rgba(0, 29, 110, 0.05)',
  marginBottom: '64px',
  boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
}));

const SuccessStories = () => {
  const stories = [
    {
      title: "How AppreLab Empowered 500+ Nigerian Developers",
      client: "AppreLab Community",
      result: "90% Employment Rate",
      desc: "Through our immersive micro-courses and WorkLab projects, we've helped hundreds of developers transition from learning to high-income careers.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&q=80"
    },
    {
      title: "Scaling a FinTech Startup to $10M Valuation",
      client: "Zest Finance",
      result: "Managed Engineering Team",
      desc: "We provided the technical infrastructure and engineering talent that allowed Zest to scale their operations across West Africa in record time.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80"
    }
  ];

  return (
    <Box sx={{ pb: 15 }}>
      <SuccessHero>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ letterSpacing: '0.4em', color: 'primary.main', fontWeight: 800 }}>
            CASE STUDIES
          </Typography>
          <Typography variant="h1" sx={{ fontWeight: 900, mt: 2, mb: 3, fontSize: { xs: '3rem', md: '4.5rem' }, letterSpacing: '-0.04em' }}>
            Impact in <Box component="span" sx={{ color: 'primary.main' }}>Action</Box>
          </Typography>
          <Typography variant="h5" sx={{ color: 'text.secondary', fontWeight: 400, lineHeight: 1.6 }}>
            Real stories of transformation, growth, and digital excellence.
          </Typography>
        </Container>
      </SuccessHero>

      <Container maxWidth="lg">
        {stories.map((story, idx) => (
          <StoryCard
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            sx={{ display: 'flex', flexDirection: { xs: 'column', md: idx % 2 === 0 ? 'row' : 'row-reverse' } }}
          >
            <Box sx={{ flex: 1.2, height: { xs: '300px', md: '450px' } }}>
              <img src={story.image} alt={story.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box sx={{ flex: 1, p: { xs: 5, md: 8 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800 }}>{story.client}</Typography>
              <Typography variant="h3" sx={{ fontWeight: 900, mt: 1, mb: 3 }}>{story.title}</Typography>
              <Typography variant="h6" sx={{ color: 'secondary.main', fontWeight: 700, mb: 3 }}>{story.result}</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.1rem', mb: 4 }}>
                {story.desc}
              </Typography>
              <Button variant="outlined" size="large" sx={{ alignSelf: 'flex-start', borderRadius: '14px', px: 4 }}>Read Full Story</Button>
            </Box>
          </StoryCard>
        ))}
      </Container>
    </Box>
  );
};

export default SuccessStories;
