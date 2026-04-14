import React from 'react';
import { Box, Container, Typography, Stack, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import DevicesIcon from '@mui/icons-material/Devices';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import BoltIcon from '@mui/icons-material/Bolt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #001D6E 0%, #00144D 100%)',
  color: 'white',
  padding: '160px 0 100px 0',
  position: 'relative',
  overflow: 'hidden',
}));

const ProductCard = styled(motion.div)(({ theme }) => ({
  background: '#ffffff',
  borderRadius: '32px',
  padding: '48px',
  border: '1px solid rgba(0, 29, 110, 0.08)',
  position: 'relative',
  transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: '0 30px 60px rgba(0, 29, 110, 0.1)',
    borderColor: theme.palette.primary.main + '22',
  },
}));

const IconCircle = styled(Box)(({ theme, color }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: color + '15',
  color: color,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '32px',
}));

const Products = () => {
  const productList = [
    {
      title: 'Talent Incubation',
      tagline: 'Empowering the Next Generation',
      desc: 'Our flagship program designed to bridge the gap between academic learning and industry readiness through intensive mentorship and real-project exposure.',
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      color: '#001D6E',
      features: ['1-on-1 Mentorship', 'Real Project Experience', 'Industry Certification']
    },
    {
      title: 'Platform Incubation',
      tagline: 'Scaling Visionary Startups',
      desc: 'We provide the infrastructure, technical expertise, and growth strategies needed to take your digital platform from MVP to global scale.',
      icon: <DevicesIcon sx={{ fontSize: 40 }} />,
      color: '#6366F1',
      features: ['Cloud Infrastructure', 'Go-to-market Strategy', 'Technical Audit']
    },
    {
      title: 'Product Innovation',
      tagline: 'Transforming Ideas into Reality',
      desc: 'From conceptualization to deployment, we build scalable digital products that solve complex socio-economic challenges in Africa and beyond.',
      icon: <LightbulbIcon sx={{ fontSize: 40 }} />,
      color: '#EC4899',
      features: ['Agile Development', 'UX/UI Design', 'Market Validation']
    }
  ];

  return (
    <Box>
      <HeroSection>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="overline" sx={{ letterSpacing: '0.4em', color: 'secondary.main', fontWeight: 800 }}>
              OUR PRODUCTS
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: 900, fontSize: { xs: '3rem', md: '5rem' }, mt: 2, mb: 3, letterSpacing: '-0.04em' }}>
              Solutions for the <br />
              Digital Economy
            </Typography>
            <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', lineHeight: 1.6, fontWeight: 400 }}>
              We've built a multi-layered ecosystem that nurtures talent, accelerates platforms, and crafts innovative products from the ground up.
            </Typography>
          </motion.div>
        </Container>
        
        {/* Animated background element */}
        <Box sx={{ 
          position: 'absolute', 
          top: '20%', 
          right: '-10%', 
          width: '600px', 
          height: '600px', 
          background: 'radial-gradient(circle, rgba(255,235,59,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 0
        }} />
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 15 }}>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, 1fr)' }, 
          gap: 6,
          mt: -20,
          position: 'relative',
          zIndex: 2
        }}>
          {productList.map((product, idx) => (
            <ProductCard
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <IconCircle color={product.color}>
                {product.icon}
              </IconCircle>
              <Typography variant="overline" sx={{ color: product.color, fontWeight: 800, letterSpacing: '0.1em' }}>
                {product.tagline}
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 900, mt: 1, mb: 3, fontSize: '2.25rem', letterSpacing: '-0.02em', color: '#1d1d1f' }}>
                {product.title}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7, fontSize: '1.1rem' }}>
                {product.desc}
              </Typography>
              
              <Stack spacing={2} sx={{ mb: 4 }}>
                {product.features.map((feature, fIdx) => (
                  <Box key={fIdx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <BoltIcon sx={{ color: product.color, fontSize: 18 }} />
                    <Typography sx={{ fontWeight: 600, fontSize: '1rem', color: '#1d1d1f' }}>{feature}</Typography>
                  </Box>
                ))}
              </Stack>

              <Button 
                endIcon={<ArrowForwardIcon />} 
                sx={{ 
                  color: product.color, 
                  fontWeight: 800, 
                  p: 0, 
                  '&:hover': { bgcolor: 'transparent', transform: 'translateX(4px)' },
                  transition: 'transform 0.2s ease'
                }}
              >
                Learn More
              </Button>
            </ProductCard>
          ))}
        </Box>

        <Box sx={{ mt: 20, textAlign: 'center' }}>
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 3, letterSpacing: '-0.02em' }}>
            Built for <Box component="span" sx={{ color: 'primary.main' }}>Performance</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '700px', mx: 'auto', fontSize: '1.2rem', mb: 8 }}>
            Our products leverage cutting-edge technology to ensure speed, security, and infinite scalability for your business needs.
          </Typography>
          
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, 
            gap: 4 
          }}>
            {[
              { label: 'Uptime', value: '99.9%' },
              { label: 'Speed', value: '<200ms' },
              { label: 'Users', value: '1M+' },
              { label: 'Security', value: 'Bank-Grade' }
            ].map((stat, idx) => (
              <Box key={idx} sx={{ p: 4, bgcolor: 'rgba(0,29,110,0.02)', borderRadius: '24px' }}>
                <Typography variant="h3" sx={{ fontWeight: 900, color: 'primary.main', mb: 1 }}>{stat.value}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 700 }}>{stat.label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Products;
