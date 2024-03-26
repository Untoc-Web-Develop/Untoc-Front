import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const whiteListKeys = {
  getWhiteListKey: ['getWhiteListKey'],
};

const useGetWhiteListQuery = () => {
  const fetcher = () => axios.get('/whitelist');

  return useQuery({
    queryKey: whiteListKeys.getWhiteListKey,
    queryFn: fetcher,
  });
};

const usePostWhiteListMutation = () => {
  const queryClient = useQueryClient();

  const fetcher = ({ generation, name, studentId, email }) =>
    axios.post('/whitelist', {
      generation,
      name,
      studentId,
      email,
    });

  return useMutation({
    mutationFn: fetcher,
    onSuccess: () => {
      queryClient.invalidateQueries(whiteListKeys.getWhiteListKey);
    },
    onError: () => {
      // alert('화이트리스트 등록을 실패했습니다.');
    },
  });
};

const useDeleteWhiteListMutation = () => {
  const queryClient = useQueryClient();

  const fetcher = ({ id }) => axios.delete(`/whitelist/${id}`);

  return useMutation({
    mutationFn: fetcher,
    onSuccess: () => {
      queryClient.invalidateQueries(whiteListKeys.getWhiteListKey);
    },
    onError: () => {
      // alert('화이트리스트 삭제를 실패했습니다.');
    },
  });
};

export { useGetWhiteListQuery, usePostWhiteListMutation, useDeleteWhiteListMutation };
