'use client';
import { useUploadFileMutation } from '@/hooks';
import { Button, CircularProgress, Typography } from '@mui/material';
import React, { useState } from 'react';

const UploadPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const uploadMutation = useUploadFileMutation();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (file) {
      uploadMutation.mutate(file);
    }
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Upload de Arquivo Excel
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <input
          type="file"
          onChange={handleFileChange}
          accept=".xlsx"
          style={{ marginBottom: 10 }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={uploadMutation.isLoading}
        >
          Enviar
        </Button>
        {uploadMutation.isLoading && (
          <CircularProgress size={24} style={{ marginLeft: 15 }} />
        )}
        {uploadMutation.isError && (
          <Typography color="error" style={{ marginLeft: 15 }}>
            Erro ao enviar o arquivo.
          </Typography>
        )}
        {uploadMutation.isSuccess && (
          <Typography style={{ marginLeft: 15 }}>
            Arquivo enviado com sucesso!
          </Typography>
        )}
      </form>
    </>
  );
};

export default UploadPage;
