import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ContactTable from './ContactTable';
import { HttpRequest } from '../../Services/Utils/httpRequest';
import { useEffect, useState } from 'react';

const theme = createTheme();

export default function Contact() {
    const [state, setState] = useState();

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const payload = {
        name: data.get('name'),
        last_name: data.get('last_name'),
        email: data.get('email'),
        phone: data.get('phone'),
        cell_phone: data.get('cell_phone'),
        address: data.get('address')
    };
    const response = await HttpRequest.postData(payload, '/api/v1/library/');
    setState(response);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <p>
            Contactos
          </p>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
    
            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              label="Nombre"
              type="text"
              id="name"
              autoComplete="contact-name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="last_name"
              label="Apellidos"
              type="text"
              id="last_name"
              autoComplete="contact-last_name"
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="phone"
              label="Teléfono"
              type="number"
              id="phone"
              autoComplete="current-phone"
            />
             <TextField
              margin="normal"
              required
              fullWidth
              name="cell_phone"
              label="Celular"
              type="number"
              id="cell_phone"
              autoComplete="current-cell_phone"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="address"
              label="Dirección"
              type="text"
              id="address"
              autoComplete="current-address"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Agregar
            </Button>
          </Box>
        </Box>
      </Container>
        <Container component="main" maxWidth="md">
            <ContactTable newContact={state} />
        </Container>
    </ThemeProvider>
  );
}