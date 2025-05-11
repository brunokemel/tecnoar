import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  
  Box,
} from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const services = [
  {
    title: 'Manutenção Preventiva',
    description: 'Inspeção e manutenção regular do sistema de ar condicionado para garantir seu funcionamento ideal.',
    icon: <BuildIcon sx={{ fontSize: 60 }} />,
  },
  {
    title: 'Recarga de Gás',
    description: 'Recarga de gás refrigerante com equipamentos modernos e certificados.',
    icon: <AcUnitIcon sx={{ fontSize: 60 }} />,
  },
  {
    title: 'Atendimento Móvel',
    description: 'Serviço de atendimento em campo para sua maior comodidade.',
    icon: <LocalShippingIcon sx={{ fontSize: 60 }} />,
  },
];

const Services = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Nossos Serviços
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 2,
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {service.icon}
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;