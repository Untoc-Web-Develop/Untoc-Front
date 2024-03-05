import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const whitelistKeys = {
  getWhitelistKey: ['getWhitelist'],
};

const useGetWhitelistQuery = () => {
  const fetcher = () => axios.get('/whitelist');

  return useQuery({
    queryKey: whitelistKeys.getWhitelistKey,
    queryFn: fetcher,
  });
};

const usePostWhitelistQuery = () => {
  const queryClient = useQueryClient();

  const fetcher = ({ email, phoneNumber, studentNumber }) =>
    axios.post('/whitelist', {
      email,
      phoneNumber,
      studentNumber,
    });

  return useMutation({
    mutationFn: fetcher,
    onSuccess: () => {
      // alert('등록되었습니다.');
      queryClient.invalidateQueries(whitelistKeys.getWhitelistKey);
    },
    onError: () => {
      // alert('등록에 실패했습니다.');
    },
  });
};

const WhitelistApis = {
  useGetWhitelistQuery,
  usePostWhitelistQuery,
};

export default WhitelistApis;
