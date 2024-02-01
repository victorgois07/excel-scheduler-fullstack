import { UserPagination } from '@/types';
import axiosInstance from '.';

class ApiService {
  async getUsers({
    page,
    pageSize,
  }: {
    page: number;
    pageSize: number;
  }): Promise<UserPagination> {
    const response = await axiosInstance.get(
      `/users?page=${page}&page_size=${pageSize}`
    );
    return response.data;
  }

  async getUser(id: string) {
    const response = await axiosInstance.get(`/users/${id}`);
    return response.data;
  }

  async updateUser(id: string, userData: any) {
    const response = await axiosInstance.put(`/users/${id}`, userData);
    return response.data;
  }

  async uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axiosInstance.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  }
}

const apiService = new ApiService();
export default apiService;
