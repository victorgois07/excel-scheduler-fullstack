import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="body1">
        © {new Date().getFullYear()} ExcelScheduler
      </Typography>
    </Box>
  );
};

export default Footer;
