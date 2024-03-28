import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const usePostSendEmailMutation = () => {
  const fetcher = ({ email }) => {
    axios.post('/email/send-code', {
      email,
    });
  };

  return useMutation({
    mutationFn: fetcher,
    onSuccess: () => {
      alert('이메일 전송이 성공하였습니다.');
    },
    onError: () => {
      alert('이메일 전송이 실패하였습니다.');
    },
  });
};

const usePostVerifyEmailCodeMutation = () => {
  const fetcher = ({ email, verificationCode }) => {
    axios.post('/email/verify-code', {
      email,
      verificationCode,
    });
  };

  return useMutation({
    mutationFn: fetcher,
    onSuccess: () => {
      alert('인증코드 확인되었습니다.');
    },
    onError: () => {
      alert('인증코드가 잘못되었습니다.');
    },
  });
};

const usePostRegisterMutation = () => {
  const fetcher = ({ email, password, username, phoneNumber, studentId }) => {
    axios.post('/register', {
      email,
      password,
      username,
      phoneNumber,
      studentId,
    });
  };

  return useMutation({
    mutationFn: fetcher,
    onSuccess: () => {
      alert('회원가입에 성공하였습니다.');
    },
    onError: () => {
      alert('회원가입에 실패하였습니다.');
    },
  });
};

export { usePostSendEmailMutation, usePostVerifyEmailCodeMutation, usePostRegisterMutation };
