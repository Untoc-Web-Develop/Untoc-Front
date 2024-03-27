import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import axios from 'axios';

const adminKeys = {
  getUsersKey: ['getUsers'],
};

const useGetUsersQuery = () => {
  const fetcher = () => axios.get('/users');

  return useQuery({
    queryKey: adminKeys.getUsersKey,
    queryFn: fetcher,
  });
};

const usePatchUserActivationMutation = () => {
  const queryClient = useQueryClient();

  const fetcher = ({ id, activation }) =>
    axios.patch(`/activation/${id}`, {
      activation,
    });

  return useMutation({
    mutationFn: fetcher,
    onSuccess: () => {
      queryClient.invalidateQueries(adminKeys.getUsersKey);
    },
  });
};

export { useGetUsersQuery, usePatchUserActivationMutation };
