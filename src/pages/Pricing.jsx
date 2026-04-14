import React, { useState } from 'react';
import { Box, Container, Typography, Stack, Button, Switch } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import CheckIcon from '@mui/icons-material/Check';

const PricingHero = styled(Box)(({ theme }) => ({
  background: '#ffffff',
  padding: '160px 0 80px 0',
  textAlign: 'center',
}));

const PricingCard = styled(motion.div)(({ theme, popular }) => ({
  padding: '48px',
  borderRadius: popular ? '40px' : '32px',
  background: popular ? '#001D6E' : '#ffffff',
  color: popular ? '#ffffff' : '#1d1d1f',
  border: popular ? 'none' : '1px solid rgba(0, 29, 110, 0.08)',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  height: '102%',
  boxShadow: popular ? '0 30px 60px rgba(0, 29, 110, 0.2)' : '0 10px 40px rgba(0,0,0,0.03)',
  transform: popular ? 'scale(1.05)' : 'none',
  zIndex: popular ? 2 : 1,
}));

const FeatureItem = ({ text, popular }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
    <Box
      sx={{
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        bgcolor: popular ? 'rgba(255, 235, 59, 0.2)' : 'rgba(0, 29, 110, 0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <CheckIcon sx={{ fontSize: 16, color: popular ? '#FFEB3B' : 'primary.main' }} />
    </Box>
    <Typography variant="body1" sx={{ fontWeight: 500, opacity: popular ? 0.9 : 1 }}>
      {text}
    </Typography>
  </Box>
);

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      title: "Individual",
      price: isAnnual ? "29" : "39",
      desc: "Perfect for students and early-stage learners looking to build their digital career.",
      features: ["Resource Hub Access", "AppreLab Basic", "Community Support", "Weekly Insight Newsletter"],
      popular: false,
      buttonText: "Start Learning"
    },
    {
      title: "Professional",
      price: isAnnual ? "99" : "129",
      desc: "For those ready to scale their impact and access high-value project opportunities.",
      features: ["Priority WorkLab Access", "1-on-1 Mentorship", "Technical Certification", "Portfolio Hosting"],
      popular: true,
      buttonText: "Join Professional"
    },
    {
      title: "Enterprise",
      price: "Custom",
      desc: "Bespoke solutions for businesses looking to build, scale, or transform their platform.",
      features: ["Full Technical Audit", "Dedicated Project Team", "Custom Infrastructure", "Priority Support"],
      popular: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <Box sx={{ pb: 15 }}>
      < PricingHero>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ letterSpacing: '0.4em', color: 'primary.main', fontWeight: 800 }}>
            INVEST IN INNOVATION
          </Typography>
          <Typography variant="h1" sx={{ fontWeight: 900, mt: 2, mb: 3, letterSpacing: '-0.04em', fontSize: { xs: '3rem', md: '4.5rem' } }}>
            Pricing that <Box component="span" sx={{ color: 'primary.main' }}>Scales</Box>
          </Typography>
          <Typography variant="h5" sx={{ color: 'text.secondary', fontWeight: 400, lineHeight: 1.6, mb: 6 }}>
            Transparent engagement models designed for learners, specialists, and visionary organizations.
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
            <Typography sx={{ fontWeight: 700, color: !isAnnual ? 'primary.main' : 'text.secondary' }}>Monthly</Typography>
            <Switch checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} />
            <Box sx={{ position: 'relative' }}>
              <Typography sx={{ fontWeight: 700, color: isAnnual ? 'primary.main' : 'text.secondary' }}>Annually</Typography>
              <Box
                sx={{
                  position: 'absolute',
                  top: '-24px',
                  right: '-60px',
                  bgcolor: '#FFEB3B',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: '100px',
                  fontSize: '0.7rem',
                  fontWeight: 900,
                  color: '#001D6E'
                }}
              >
                SAVE 25%
              </Box>
            </Box>
          </Stack>
        </Container>
      </PricingHero>

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, 1fr)' },
            gap: 4,
            alignItems: 'center'
          }}
        >
          {plans.map((plan, idx) => (
            <PricingCard
              key={idx}
              popular={plan.popular}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: plan.popular ? '#FFEB3B' : 'primary.main' }}>
                {plan.title.toUpperCase()}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 3 }}>
                <Typography variant="h2" sx={{ fontWeight: 900, fontSize: '3.5rem' }}>
                  {plan.price !== "Custom" && "$"}
                  {plan.price}
                </Typography>
                {plan.price !== "Custom" && (
                  <Typography variant="body1" sx={{ ml: 1, fontWeight: 600, opacity: 0.7 }}>
                    /mo
                  </Typography>
                )}
              </Box>
              <Typography variant="body1" sx={{ mb: 4, opacity: 0.8, lineHeight: 1.6, flexGrow: 0 }}>
                {plan.desc}
              </Typography>

              <Box sx={{ mb: 6, flexGrow: 1 }}>
                {plan.features.map((feature, fIdx) => (
                  <FeatureItem key={fIdx} text={feature} popular={plan.popular} />
                ))}
              </Box>

              <Button
                variant={plan.popular ? "contained" : "outlined"}
                size="large"
                sx={{
                  borderRadius: '16px',
                  py: 2,
                  fontWeight: 800,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  bgcolor: plan.popular ? '#FFEB3B' : 'transparent',
                  color: '#001D6E',
                  borderColor: plan.popular ? 'none' : 'rgba(0,0,0,0.1)',
                  '&:hover': {
                    bgcolor: plan.popular ? '#FDD835' : 'rgba(0,0,0,0.02)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                {plan.buttonText}
              </Button>
            </PricingCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;
