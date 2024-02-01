'use client';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        Bem-vindo ao ExcelScheduler
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        Uma solução simples para gerenciamento de uploads de arquivos Excel.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Link href="/upload" passHref>
          <Button variant="contained" color="primary">
            Fazer Upload de Arquivo
          </Button>
        </Link>
        <Link href="/users" passHref>
          <Button variant="outlined" color="primary" sx={{ ml: 2 }}>
            Ver Usuários
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default HomePage;
