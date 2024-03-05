/* eslint-disable import/prefer-default-export */
import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/reducers/userReducer';

const useLoginMutation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetcher = ({ email, password }) =>
    axios.post('/login', {
      email,
      password,
    });

  return useMutation({
    mutationFn: fetcher,
    onSuccess: (data) => {
      dispatch(
        setUser({
          userId: data.data.userId,
          userName: data.data.userName,
          badgeKeys: data.data.badgeKeys,
        }),
      );
      navigate('/');
    },
    onError: () => {
      alert('로그인에 실패했습니다.');
    },
  });
};

export { useLoginMutation };
