import React from 'react';
import { Box, Container, Typography, Stack, Button, useTheme, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';

const ResourceSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#fcfdfe',
  padding: '120px 0',
}));

const BlogCard = styled(motion.div)(({ theme }) => ({
  background: '#ffffff',
  borderRadius: '24px',
  overflow: 'hidden',
  border: '1px solid rgba(0, 29, 110, 0.05)',
  transition: 'all 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    boxShadow: '0 20px 40px rgba(0,29,110,0.06)',
    '& img': { transform: 'scale(1.05)' }
  },
}));

const Resources = () => {
  const blogPosts = [
    {
      title: "The Future of Digital Transformation in Africa",
      category: "Innovation",
      date: "May 12, 2024",
      desc: "Exploring how rapid mobile adoption is reshaping the socio-economic landscape across the continent.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80"
    },
    {
      title: "Building Scalable Platforms with Minimal Overhead",
      category: "Engineering",
      date: "May 08, 2024",
      desc: "A deep dive into cloud-native architectures that allow startups to scale without breaking the bank.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    },
    {
      title: "Mentorship: The Secret Ingredient for Tech Success",
      category: "Learning",
      date: "May 04, 2024",
      desc: "Why traditional education is failing and how the AppreLab model is creating high-income opportunities.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
    },
    {
      title: "AI and The Next Wave of Job Creation",
      category: "Trends",
      date: "April 28, 2024",
      desc: "Unlocking human potential: How artificial intelligence is augmenting creative and technical workflows.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    },
    {
      title: "Corporate Agility in the 21st Century",
      category: "Business",
      date: "April 22, 2024",
      desc: "How established enterprises can adopt the startup mindset to drive innovation and efficiency.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    },
    {
      title: "Success Story: 0 to MVP in 8 Weeks",
      category: "Case Study",
      date: "April 15, 2024",
      desc: "Behind the scenes of our latest platform incubation project and the milestones that led to launch.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    }
  ];

  return (
    <Box>
      <Box sx={{ pt: 16, pb: 10, bgcolor: 'white', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ letterSpacing: '0.4em', color: 'primary.main', fontWeight: 800 }}>
            INSIGHTS & RESOURCES
          </Typography>
          <Typography variant="h1" sx={{ fontWeight: 900, mt: 2, mb: 3, letterSpacing: '-0.04em', fontSize: { xs: '3rem', md: '4.5rem' } }}>
            The DX <Box component="span" sx={{ color: 'primary.main' }}>Compass</Box>
          </Typography>
          <Typography variant="h5" sx={{ color: 'text.secondary', fontWeight: 400, lineHeight: 1.6, mb: 6 }}>
            Navigating the intersection of technology, talent, and business growth.
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            bgcolor: 'rgba(0,0,0,0.03)', 
            p: 1, 
            borderRadius: '20px', 
            maxWidth: '500px', 
            mx: 'auto',
            alignItems: 'center'
          }}>
            <Box sx={{ px: 2, display: 'flex' }}><SearchIcon sx={{ color: 'text.secondary' }} /></Box>
            <input 
              placeholder="Search articles, guides, case studies..." 
              style={{ 
                flex: 1, 
                border: 'none', 
                background: 'transparent', 
                padding: '12px 0', 
                fontSize: '1rem',
                outline: 'none'
              }} 
            />
            <Button variant="contained" sx={{ borderRadius: '14px', px: 3, textTransform: 'none' }}>Search</Button>
          </Box>
        </Container>
      </Box>

      <ResourceSection>
        <Container maxWidth="lg">
          <Box 
            sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, 
              gap: 4 
            }}
          >
            {blogPosts.map((post, idx) => (
              <BlogCard
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Box sx={{ overflow: 'hidden', height: '220px' }}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      transition: 'transform 0.5s ease' 
                    }} 
                  />
                </Box>
                <Box sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Typography variant="caption" sx={{ fontWeight: 800, color: 'primary.main', opacity: 0.8 }}>
                      {post.category}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {post.date}
                    </Typography>
                  </Stack>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: '#1d1d1f', lineHeight: 1.3 }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6, flex: 1 }}>
                    {post.desc}
                  </Typography>
                  <Button 
                    endIcon={<ArrowForwardIcon />} 
                    sx={{ 
                      alignSelf: 'flex-start', 
                      p: 0, 
                      fontWeight: 700, 
                      color: 'primary.main',
                      textTransform: 'none',
                      '&:hover': { background: 'transparent', transform: 'translateX(4px)' },
                      transition: 'transform 0.2s ease'
                    }}
                  >
                    Read Article
                  </Button>
                </Box>
              </BlogCard>
            ))}
          </Box>

          <Box sx={{ mt: 10, textAlign: 'center' }}>
            <Button 
              size="large" 
              variant="outlined" 
              sx={{ 
                borderRadius: '16px', 
                px: 5, 
                py: 2, 
                fontWeight: 800, 
                color: '#1d1d1f', 
                borderColor: 'rgba(0,0,0,0.1)' 
              }}
            >
              Load More Insights
            </Button>
          </Box>
        </Container>
      </ResourceSection>
    </Box>
  );
};

export default Resources;
