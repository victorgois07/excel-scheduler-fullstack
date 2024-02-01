import { useMutation } from 'react-query';
import ApiService from '../../services/api';

export const useUploadFileMutation = () => {
  return useMutation({
    mutationKey: ['uploadFile'],
    mutationFn: (file: File) => ApiService.uploadFile(file),
  });
};
