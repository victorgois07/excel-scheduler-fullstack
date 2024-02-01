import { useMutation } from 'react-query';
import ApiService from '../../services/api';

export const useUpdateUserMutation = () => {
  return useMutation({
    mutationFn: (data: any) => ApiService.updateUser(data.id, data.userData),
    mutationKey: ['updateUser'],
  });
};
