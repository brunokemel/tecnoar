import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import tecnoarImage from '../image/tecnoar.png';

const AboutSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.grey[100],
}));

const About = () => {
  return (
    <AboutSection>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h2" gutterBottom>
              Sobre a TecnoAR
            </Typography>
            <Typography variant="body1" paragraph>
              A TecnoAR é uma empresa especializada em refrigeração automotiva,
              com mais de 10 anos de experiência no mercado. Nossa equipe é
              altamente qualificada e utiliza as mais modernas tecnologias para
              garantir o melhor serviço aos nossos clientes.
            </Typography>
            <Typography variant="body1" paragraph>
              Nosso compromisso é oferecer soluções completas em ar condicionado
              automotivo, desde a manutenção preventiva até reparos complexos,
              sempre com qualidade, agilidade e preço justo.
            </Typography>
            <Typography variant="body1">
              Trabalhamos com todas as marcas e modelos de veículos, oferecendo
              garantia em todos os nossos serviços e peças.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: 400,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <img
                src={tecnoarImage}
                alt="Imagem da Oficina TecnoAR"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                  borderRadius: '16px',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About;