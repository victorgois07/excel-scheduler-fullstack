import { useQuery } from 'react-query';
import ApiService from '../../services/api';

export const useUsersQuery = (page = 1, pageSize = 10) => {
  return useQuery(['users', page, pageSize], () =>
    ApiService.getUsers({ page, pageSize })
  );
};
