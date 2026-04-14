import React from 'react';
import { Box, Container, Typography, Stack, Button, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import BusinessIcon from '@mui/icons-material/Business';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GroupsIcon from '@mui/icons-material/Groups';
import StorageIcon from '@mui/icons-material/Storage';

const SolutionSection = styled(Box)(({ theme }) => ({
  padding: '120px 0',
  backgroundColor: '#ffffff',
}));

const HeroBox = styled(Box)(({ theme }) => ({
  background: '#001D6E',
  color: 'white',
  padding: '160px 0 120px 0',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
}));

const SolutionCard = styled(motion.div)(({ theme }) => ({
  padding: '64px',
  borderRadius: '40px',
  backgroundColor: '#f8faff',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '64px',
  marginBottom: '48px',
  border: '1px solid rgba(0, 29, 110, 0.05)',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    padding: '40px',
    textAlign: 'center',
    gap: '32px'
  },
}));

const Solutions = () => {
  const theme = useTheme();
  
  const solutionList = [
    {
      id: "corporate",
      title: "Corporate Innovation",
      desc: "We help established enterprises reinvent themselves through digital transformation, process automation, and innovation-led growth strategies.",
      icon: <BusinessIcon sx={{ fontSize: 60, color: '#001D6E' }} />,
      tags: ["Digital Transformation", "Process Automation", "R&D Outsourcing"],
      color: "#001D6E"
    },
    {
      id: "startups",
      title: "Startup Acceleration",
      desc: "Fueling the next wave of unicorns. We provide startups with technical co-founding, seed-stage infrastructure, and market-ready engineering teams.",
      icon: <RocketLaunchIcon sx={{ fontSize: 60, color: '#6366F1' }} />,
      tags: ["Technical Co-founding", "MVP Development", "Scale Consulting"],
      color: "#6366F1"
    },
    {
      id: "talent",
      title: "Strategic Talent Sourcing",
      desc: "Connect with the top 1% of digital talent in Africa. Our vetted experts are ready to integrate into your existing teams and deliver world-class results.",
      icon: <GroupsIcon sx={{ fontSize: 60, color: '#EC4899' }} />,
      tags: ["Vetted Engineers", "Project Managers", "UX/UI Design"],
      color: "#EC4899"
    }
  ];

  return (
    <Box>
      <HeroBox>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h1" sx={{ fontWeight: 900, mb: 3, fontSize: { xs: '3rem', md: '4.5rem' }, letterSpacing: '-0.04em' }}>
              Solutions for <br />
              <Box component="span" sx={{ color: 'secondary.main' }}>Every Scale</Box>
            </Typography>
            <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 400, lineHeight: 1.6 }}>
              Whether you are a solo visionary or a global enterprise, we have the strategic frameworks and technical power to elevate your digital presence.
            </Typography>
          </motion.div>
        </Container>
        
        {/* Background visual dots */}
        <Box sx={{ 
          position: 'absolute', 
          inset: 0, 
          opacity: 0.1, 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 
          backgroundSize: '40px 40px' 
        }} />
      </HeroBox>

      <SolutionSection>
        <Container maxWidth="lg">
          {solutionList.map((sol, idx) => (
            <SolutionCard
              key={sol.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              sx={{ flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse' }}
            >
              <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <Box 
                  sx={{ 
                    width: '120px', 
                    height: '120px', 
                    borderRadius: '50%', 
                    bgcolor: 'white', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                    border: `1px solid ${sol.color}22`
                  }}
                >
                  {sol.icon}
                </Box>
              </Box>
              
              <Box sx={{ flex: 2 }}>
                <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, color: '#1d1d1f' }}>{sol.title}</Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.2rem', mb: 4, lineHeight: 1.7 }}>
                  {sol.desc}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
                  {sol.tags.map((tag, tIdx) => (
                    <Box 
                      key={tIdx} 
                      sx={{ 
                        px: 2, 
                        py: 0.5, 
                        bgcolor: 'white', 
                        borderRadius: '100px', 
                        fontSize: '0.875rem', 
                        fontWeight: 700, 
                        color: sol.color,
                        border: `1px solid ${sol.color}22`
                      }}
                    >
                      {tag}
                    </Box>
                  ))}
                </Stack>
                <Button 
                  variant="outlined" 
                  size="large"
                  sx={{ 
                    borderRadius: '16px', 
                    px: 4, 
                    py: 1.5, 
                    fontWeight: 700, 
                    color: '#1d1d1f', 
                    borderColor: 'rgba(0,0,0,0.1)' 
                  }}
                >
                  View Details
                </Button>
              </Box>
            </SolutionCard>
          ))}
        </Container>
      </SolutionSection>

      <Box sx={{ bgcolor: '#001D6E', color: 'white', py: 15 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 4 }}>Need a Custom Solution?</Typography>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.7)', mb: 6, fontWeight: 400 }}>
            Our experts are ready to design a bespoke strategy specifically for your unique challenges and goals.
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            sx={{ 
              bgcolor: 'secondary.main', 
              color: 'primary.main', 
              fontWeight: 800, 
              px: 6, 
              py: 2, 
              borderRadius: '20px',
              '&:hover': { bgcolor: '#FDD835' }
            }}
          >
            Schedule a Discovery Call
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Solutions;
