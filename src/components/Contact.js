import React from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
} from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Entre em Contato
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Preencha o formulário abaixo e entraremos em contato o mais breve possível
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Nome"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Telefone"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Mensagem"
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
            >
              Enviar Mensagem
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 