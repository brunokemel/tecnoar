import {
  Container,
  Typography,
  Box,
} from '@mui/material';

const Location = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Nossa Localização
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 2 }}>
          Veja abaixo onde estamos localizados:
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <iframe
            title="Localização Tecnoar"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.214234833635!2d-43.20937268455644!3d-22.90278098501259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5e1b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sEndereço%20Exemplo!5e0!3m2!1spt-BR!2sbr!4v1633094400000!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: 8 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Location;