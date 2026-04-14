import React from 'react';
import { Box, Container, Typography, Avatar, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const TeamHero = styled(Box)(({ theme }) => ({
  background: '#ffffff',
  padding: '160px 0 80px 0',
  textAlign: 'center',
}));

const TeamMemberCard = styled(motion.div)(({ theme }) => ({
  textAlign: 'center',
  padding: '40px',
  borderRadius: '32px',
  background: '#f8faff',
  border: '1px solid rgba(0, 29, 110, 0.05)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0,29,110,0.06)',
  },
}));

const Team = () => {
  const members = [
    { name: "Brendan Mebson", role: "CEO & Founder", image: "https://i.pravatar.cc/300?u=1", github: "https://github.com/brendanmebson" },
    { name: "Sarah John", role: "Head of Innovation", image: "https://i.pravatar.cc/300?u=2" },
    { name: "David Chen", role: "Lead Engineer", image: "https://i.pravatar.cc/300?u=3" },
    { name: "Amara Okoro", role: "Product Strategy", image: "https://i.pravatar.cc/300?u=4" },
    { name: "Michael Smith", role: "WorkLab Director", image: "https://i.pravatar.cc/300?u=5" },
    { name: "Linda Gray", role: "Community Lead", image: "https://i.pravatar.cc/300?u=6" },
  ];

  return (
    <Box sx={{ pb: 15 }}>
      <TeamHero>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ letterSpacing: '0.4em', color: 'primary.main', fontWeight: 800 }}>
            OUR TEAM
          </Typography>
          <Typography variant="h1" sx={{ fontWeight: 900, mt: 2, mb: 3, fontSize: { xs: '3rem', md: '4.5rem' }, letterSpacing: '-0.04em' }}>
            Meet the <Box component="span" sx={{ color: 'primary.main' }}>Architects</Box>
          </Typography>
          <Typography variant="h5" sx={{ color: 'text.secondary', fontWeight: 400, lineHeight: 1.6 }}>
            A diverse team of experts committed to scaling digital excellence across borders.
          </Typography>
        </Container>
      </TeamHero>

      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, 
            gap: 4 
          }}
        >
          {members.map((member, idx) => (
            <TeamMemberCard
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Avatar 
                src={member.image} 
                sx={{ width: 160, height: 160, mx: 'auto', mb: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
              />
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>{member.name}</Typography>
              <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 600, mb: member.github ? 2 : 0 }}>{member.role}</Typography>
              {member.github && (
                <Typography 
                  component="a" 
                  href={member.github} 
                  target="_blank" 
                  sx={{ 
                    color: 'text.secondary', 
                    fontSize: '0.9rem', 
                    textDecoration: 'none',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  GitHub Profile
                </Typography>
              )}
            </TeamMemberCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Team;
