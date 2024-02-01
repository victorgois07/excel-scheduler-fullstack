import { useQuery } from 'react-query';
import ApiService from '../../services/api';

export const useUserQuery = (id: string) => {
  return useQuery(['user', id], () => ApiService.getUser(id));
};
