import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const applyKeys = {
  getApplyKey: ['getApply'],
  getApplySettingKey: ['getApplySetting'],
  getApplyQuestionKey: ['getApplyQuestion'],
};

const useGetApplyQuery = () => {
  const fetcher = () => axios.get('/apply');

  return useQuery({
    queryKey: applyKeys.getApplyKey,
    queryFn: fetcher,
  });
};

const usePostApplyQuery = () => {
  const queryClient = useQueryClient();

  const fetcher = ({ name, studentId, phoneNumber, email, applyValues }) =>
    axios.post('/apply', {
      name,
      studentId,
      phoneNumber,
      email,
      applyValues,
    });

  return useMutation({
    mutationFn: fetcher,
    onSuccess: () => {
      // alert('지원서 제출이 완료되었습니다');
      queryClient.invalidateQueries(applyKeys.getApplyKey);
    },
    onError: () => {
      // alert('지원서 제출에 실패했습니다.');
    },
  });
};

const useGetApplySettingQuery = () => {
  const fetcher = () => axios.get('/apply/apply-setting');

  return useQuery({
    queryKey: applyKeys.getApplySettingKey,
    queryFn: fetcher,
  });
};

const usePostApplySettingQuery = () => {
  const queryClient = useQueryClient();

  const fetcher = ({ generation, openAt, closeAt, content }) =>
    axios.post('/apply/apply-setting', {
      generation,
      openAt,
      closeAt,
      content,
    });

  return useMutation({
    mutationFn: fetcher,
    onSuccess: () => {
      // alert('지원서 설정이 완료되었습니다');
      queryClient.invalidateQueries(applyKeys.getApplySettingKey);
    },
    onError: () => {
      // alert('지원서 설정에 실패했습니다.');
    },
  });
};

const usePatchApplySettingQuery = () => {
  const queryClient = useQueryClient();

  const fetcher = ({ id, generation, openAt, closeAt, content }) =>
    axios.patch('/apply/apply-setting', {
      id,
      newApplySetting: {
        generation,
        openAt,
        closeAt,
        content,
      },
    });

  return useMutation({
    mutationFn: fetcher,
    onSuccess: () => {
      // alert('지원서 설정이 완료되었습니다');
      queryClient.invalidateQueries(applyKeys.getApplySettingKey);
    },
    onError: () => {
      // alert('지원서 설정에 실패했습니다.');
    },
  });
};

const useDeleteApplySettingQuery = () => {
  const queryClient = useQueryClient();

  const fetcher = ({ id }) => axios.delete(`/apply/apply-setting?id=${id}`);

  return useMutation({
    mutationFn: fetcher,
    onSuccess: () => {
      // alert('지원서 설정이 삭제되었습니다');
      queryClient.invalidateQueries(applyKeys.getApplySettingKey);
    },
    onError: () => {
      // alert('지원서 설정 삭제에 실패했습니다.');
    },
  });
};

const useGetApplyQuestionQuery = () => {
  const fetcher = () => axios.get('/apply/apply-question');

  return useQuery({
    queryKey: applyKeys.getApplyQuestionKey,
    queryFn: fetcher,
  });
};

const usePostApplyQuestionQuery = () => {
  const queryClient = useQueryClient();

  const fetcher = ({ question, description }) =>
    axios.post('/apply/apply-question', {
      question,
      description,
    });

  return useMutation({
    mutationFn: fetcher,
    onSuccess: () => {
      // alert('지원서 질문이 추가되었습니다');
      queryClient.invalidateQueries(applyKeys.getApplyQuestionKey);
    },
    onError: () => {
      // alert('지원서 질문 추가에 실패했습니다.');
    },
  });
};

const usePatchApplyQuestionQuery = () => {
  const queryClient = useQueryClient();

  const fetcher = ({ id, question, description }) =>
    axios.patch('/apply/apply-question', {
      id,
      newApplyQuestion: {
        question,
        description,
      },
    });

  return useMutation({
    mutationFn: fetcher,
    onSuccess: () => {
      // alert('지원서 질문이 수정되었습니다');
      queryClient.invalidateQueries(applyKeys.getApplyQuestionKey);
    },
    onError: () => {
      // alert('지원서 질문 수정에 실패했습니다.');
    },
  });
};

const useDeleteApplyQuestionQuery = () => {
  const queryClient = useQueryClient();

  const fetcher = ({ id }) => axios.delete(`/apply/apply-question?id=${id}`);

  return useMutation({
    mutationFn: fetcher,
    onSuccess: () => {
      // alert('지원서 질문이 삭제되었습니다');
      queryClient.invalidateQueries(applyKeys.getApplyQuestionKey);
    },
    onError: () => {
      // alert('지원서 질문 삭제에 실패했습니다.');
    },
  });
};

export {
  useGetApplyQuery,
  usePostApplyQuery,
  useGetApplySettingQuery,
  usePostApplySettingQuery,
  usePatchApplySettingQuery,
  useDeleteApplySettingQuery,
  useGetApplyQuestionQuery,
  usePostApplyQuestionQuery,
  usePatchApplyQuestionQuery,
  useDeleteApplyQuestionQuery,
};
