import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const PlaceholderPage = ({ title, description }) => {
  return (
    <Box sx={{ 
      minHeight: '80vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: '#ffffff',
      pt: 10
    }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center' }}
        >
          <Typography variant="overline" sx={{ letterSpacing: '0.2em', fontWeight: 800, color: 'primary.main', mb: 2, display: 'block' }}>
            COMING SOON
          </Typography>
          <Typography variant="h1" sx={{ 
            fontWeight: 900, 
            mb: 3, 
            fontSize: { xs: '3rem', md: '5rem' },
            letterSpacing: '-0.04em',
            lineHeight: 1
          }}>
            {title}
          </Typography>
          <Typography variant="h5" sx={{ 
            color: 'text.secondary', 
            mb: 6, 
            fontWeight: 400,
            lineHeight: 1.6,
            maxWidth: '600px',
            mx: 'auto'
          }}>
            {description || "We're currently perfecting this experience to meet our S+ grade standards. Stay tuned for something extraordinary."}
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button 
              component={RouterLink}
              to="/"
              variant="contained" 
              size="large"
              sx={{ 
                borderRadius: '16px', 
                px: 4, 
                py: 1.5, 
                fontWeight: 700,
                textTransform: 'none'
              }}
            >
              Back to Home
            </Button>
            <Button 
              component={RouterLink}
              to="/contact"
              variant="outlined" 
              size="large"
              sx={{ 
                borderRadius: '16px', 
                px: 4, 
                py: 1.5, 
                fontWeight: 700,
                textTransform: 'none'
              }}
            >
              Contact Us
            </Button>
          </Box>
        </motion.div>
        
        {/* Decorative elements */}
        <Box sx={{ 
          position: 'absolute', 
          top: '20%', 
          left: '10%', 
          width: '300px', 
          height: '300px', 
          background: 'radial-gradient(circle, rgba(0, 29, 110, 0.03) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />
        <Box sx={{ 
          position: 'absolute', 
          bottom: '20%', 
          right: '10%', 
          width: '400px', 
          height: '400px', 
          background: 'radial-gradient(circle, rgba(255, 235, 59, 0.05) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />
      </Container>
    </Box>
  );
};

export default PlaceholderPage;
