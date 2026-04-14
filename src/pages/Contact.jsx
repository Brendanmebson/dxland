import React from 'react';
import { Box, Container, Typography, Stack, Button, TextField, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';

const ContactHero = styled(Box)(({ theme }) => ({
  background: '#ffffff',
  padding: '160px 0 80px 0',
}));

const InfoCard = styled(Box)(({ theme }) => ({
  background: '#001D6E',
  color: 'white',
  padding: '64px',
  borderRadius: '40px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 30px 60px rgba(0,29,110,0.2)',
}));

const FormWrapper = styled(Box)(({ theme }) => ({
  padding: '24px',
}));

const ContactField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
    backgroundColor: '#rgba(0,0,0,0.02)',
    '& fieldset': {
      borderColor: 'rgba(0,0,0,0.06)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(0,0,0,0.1)',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const Contact = () => {
  return (
    <Box sx={{ pb: 15 }}>
      <ContactHero>
        <Container maxWidth="lg">
          <Box 
            sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', lg: '1fr 1.2fr' }, 
              gap: 8,
              alignItems: 'center'
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="overline" sx={{ letterSpacing: '0.4em', color: 'primary.main', fontWeight: 800 }}>
                GET IN TOUCH
              </Typography>
              <Typography variant="h1" sx={{ fontWeight: 900, mt: 2, mb: 4, letterSpacing: '-0.04em', fontSize: { xs: '3rem', md: '4.5rem' } }}>
                Let’s Create the <br />
                <Box component="span" sx={{ color: 'primary.main' }}>Next Big Thing</Box>
              </Typography>
              <Typography variant="h5" sx={{ color: 'text.secondary', fontWeight: 400, lineHeight: 1.6, mb: 6, maxWidth: '500px' }}>
                Whether you have a question about our programs or you’re ready to scale your platform, our team is here to help.
              </Typography>
              
              <Stack spacing={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Box sx={{ width: 56, height: 56, borderRadius: '16px', bgcolor: 'rgba(0,29,110,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <EmailIcon sx={{ color: 'primary.main' }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 800, opacity: 0.5 }}>EMAIL US</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>hello@dxhub.africa</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Box sx={{ width: 56, height: 56, borderRadius: '16px', bgcolor: 'rgba(0,29,110,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PhoneIcon sx={{ color: 'primary.main' }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 800, opacity: 0.5 }}>CALL US</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>+234 (0) 800 DXHUB APP</Typography>
                  </Box>
                </Box>
              </Stack>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <InfoCard>
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography variant="h3" sx={{ fontWeight: 900, mb: 4, letterSpacing: '-0.02em' }}>
                    Send us a Message
                  </Typography>
                  <Stack spacing={3}>
                    <ContactField 
                      fullWidth 
                      placeholder="Your Full Name" 
                      variant="outlined" 
                      sx={{ '& .MuiOutlinedInput-root': { bgcolor: 'rgba(255,255,255,0.05)', color: 'white' } }} 
                    />
                    <ContactField 
                      fullWidth 
                      placeholder="Email Address" 
                      variant="outlined" 
                      sx={{ '& .MuiOutlinedInput-root': { bgcolor: 'rgba(255,255,255,0.05)', color: 'white' } }} 
                    />
                    <ContactField 
                      fullWidth 
                      placeholder="What can we help you with?" 
                      multiline 
                      rows={4} 
                      variant="outlined" 
                      sx={{ '& .MuiOutlinedInput-root': { bgcolor: 'rgba(255,255,255,0.05)', color: 'white' } }} 
                    />
                    <Button 
                      variant="contained" 
                      fullWidth 
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{ 
                        bgcolor: '#FFEB3B', 
                        color: '#001D6E', 
                        fontWeight: 900, 
                        py: 2, 
                        borderRadius: '16px',
                        textTransform: 'none',
                        fontSize: '1.1rem',
                        '&:hover': { bgcolor: '#FDD835' }
                      }}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </Box>
                
                {/* Decorative blobs for card */}
                <Box sx={{ 
                  position: 'absolute', 
                  bottom: '-20%', 
                  right: '-10%', 
                  width: '300px', 
                  height: '300px', 
                  background: 'radial-gradient(circle, rgba(255,235,59,0.1) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                  zIndex: 0
                }} />
              </InfoCard>
            </motion.div>
          </Box>
        </Container>
      </ContactHero>

      <Container maxWidth="lg" sx={{ mt: 15 }}>
        <Box sx={{ 
          p: 6, 
          borderRadius: '40px', 
          bgcolor: 'rgba(0,29,110,0.02)', 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          alignItems: 'center', 
          gap: 6 
        }}>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ width: 80, height: 80, borderRadius: '24px', bgcolor: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
              <LocationOnIcon sx={{ color: 'white', fontSize: 32 }} />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 900, mb: 2 }}>Our Innovation Hub</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.2rem', lineHeight: 1.6 }}>
              The Exchange Building, Innovation District, Lagos, Nigeria. <br />
              Open Monday - Friday, 8:00 AM - 6:00 PM.
            </Typography>
          </Box>
          <Box sx={{ flex: 1.5, width: '100%', height: '300px', borderRadius: '32px', bgcolor: 'rgba(0,0,0,0.05)', overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000&q=80" 
              alt="Office" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
