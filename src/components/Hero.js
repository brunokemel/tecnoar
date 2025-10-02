import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
  color: 'white',
  padding: theme.spacing(15, 0),
  marginTop: theme.spacing(8),
  textAlign: 'center',
}));

const Hero = () => {
  return (
    <HeroSection>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          TecnoAR
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Especialistas em Refrigeração Automotiva
        </Typography>
        <Typography variant="h6" paragraph>
          Soluções completas em ar condicionado automotivo com qualidade e garantia
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 4 }}
          href='#contact'
        >
          Agende seu Serviço
        </Button>
      </Container>
    </HeroSection>
  );
};

export default Hero; 