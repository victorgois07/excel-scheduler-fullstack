'use client';

import Footer from '@/components/Footer';
import { queryClient } from '@/plugins';
import theme from '@/plugins/mui';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import Link from 'next/link';
import { QueryClientProvider } from 'react-query';

const drawerWidth = 240;
const navItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Upload',
    path: '/upload',
  },
  {
    name: 'Users',
    path: '/users',
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <QueryClientProvider client={queryClient}>
              <CssBaseline />
              <Stack minHeight="100vh">
                <AppBar component="nav">
                  <Toolbar>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        flexGrow: 1,
                        display: { xs: 'none', sm: 'block' },
                      }}
                    >
                      Excel Scheduler - Teste FullStack
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                      {navItems.map((item) => (
                        <Link key={item.name} href={item.path} passHref>
                          <Button sx={{ color: '#fff' }}>{item.name}</Button>
                        </Link>
                      ))}
                    </Box>
                  </Toolbar>
                </AppBar>
                <Container
                  maxWidth="md"
                  component="main"
                  sx={{ py: 5, textAlign: 'center', flex: 1 }}
                >
                  <Toolbar />
                  <Stack justifyContent="center">{children}</Stack>
                </Container>
                <Footer />
              </Stack>
            </QueryClientProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
