import React from 'react';

import { Button, TextField } from '@mui/material';
import { usePostWhiteListMutation } from 'api/whiteListApi';
import { Form, useForm } from 'react-hook-form';

const EnrollWhiteList = () => {
  const {
    handleSubmit,
    control,
    register,
    reset,
    setError,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  const { mutate: postWhiteList } = usePostWhiteListMutation();

  const onSubmit = ({ generation, studentId, name, email }) => {
    if (!generation) {
      setError('generation', { type: 'manual', message: '기수를 입력해주세요' });
      return;
    }

    if (studentId.length !== 9) {
      setError('studentId', { type: 'manual', message: '학번은 9자리입니다.' });
      return;
    }

    if (!name) {
      setError('name', { type: 'manual', message: '이름을 입력해주세요' });
      return;
    }

    if (!email.endsWith('@pusan.ac.kr')) {
      setError('email', { type: 'manual', message: '부산대학교 이메일을 입력해주세요' });
      return;
    }

    postWhiteList({ generation, studentId, name, email });
    reset();
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-start">
      <h1 className="mb-10 text-2xl font-bold">화이트리스트 등록</h1>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        control={control}
        className="flex h-5/6 flex-col items-start justify-start p-4"
      >
        <div className="flex w-full justify-between">
          <TextField
            type="text"
            label="기수"
            color="yellowPoint"
            placeholder="16"
            name={register('generation').name}
            onChange={register('generation').onChange}
            ref={register('generation').ref}
          />
        </div>
        <span className="mb-4 text-error">{errors?.generation && errors?.generation?.message}</span>
        <div className="flex w-full justify-between">
          <TextField
            type="text"
            label="학번"
            color="yellowPoint"
            placeholder={`${new Date().getFullYear().toString().padEnd(9, 0)} (9자리)`}
            name={register('studentId').name}
            onChange={register('studentId').onChange}
            ref={register('studentId').ref}
          />
        </div>
        <span className="mb-4 text-error">{errors?.studentId && errors?.studentId?.message}</span>
        <div className="flex w-full justify-between">
          <TextField
            type="text"
            label="이름"
            color="yellowPoint"
            placeholder="홍길동"
            name={register('name').name}
            onChange={register('name').onChange}
            ref={register('name').ref}
          />
        </div>
        <span className="mb-4 text-error">{errors?.name && errors?.name?.message}</span>
        <div className="flex w-full justify-between">
          <TextField
            type="email"
            label="부산대 이메일"
            color="yellowPoint"
            placeholder="untoc@pusan.ac.kr"
            name={register('email').name}
            onChange={register('email').onChange}
            ref={register('email').ref}
          />
        </div>
        <span className="mb-4 text-error">{errors?.email && errors?.email?.message}</span>
        <Button type="submit" variant="contained" color="yellowPoint" className="w-full">
          등록
        </Button>
      </Form>
    </div>
  );
};

export default EnrollWhiteList;
