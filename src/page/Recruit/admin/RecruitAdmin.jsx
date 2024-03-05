import React, { useEffect, useState } from 'react';

import {
  useDeleteApplyQuestionQuery,
  useGetApplyQuestionQuery,
  useGetApplySettingQuery,
  usePatchApplyQuestionQuery,
  usePatchApplySettingQuery,
  usePostApplyQuestionQuery,
  usePostApplySettingQuery,
} from 'api/applyApi';

import RecruitDescriptionAdmin from './RecruitDescriptionAdmin';
import RecruitFormAdmin from './RecruitFormAdmin';

const RecruitAdmin = () => {
  const { data: applySetting } = useGetApplySettingQuery();
  const { data: applyQuestions } = useGetApplyQuestionQuery();

  const [editApplySetting, setEditApplySetting] = useState({});
  const [editApplyQuestions, setEditApplyQuestions] = useState([]);

  const { mutate: postApplySetting } = usePostApplySettingQuery();
  const { mutate: patchApplySetting } = usePatchApplySettingQuery();
  const { mutate: postApplyQuestion } = usePostApplyQuestionQuery();
  const { mutate: patchApplyQuestion } = usePatchApplyQuestionQuery();
  const { mutate: deleteApplyQuestion } = useDeleteApplyQuestionQuery();

  const saveApplySettingAndQuestions = () => {
    if (editApplySetting.id) {
      patchApplySetting(editApplySetting);
    } else {
      postApplySetting(editApplySetting);
    }

    const createdQuestions = editApplyQuestions.filter(
      (question) => !applyQuestions.data.applyQuestions.find((applyQuestion) => applyQuestion.id === question.id),
    );
    const updatedQuestions = editApplyQuestions.filter((question) =>
      applyQuestions.data.applyQuestions.find((applyQuestion) => applyQuestion.id === question.id),
    );
    const deletedQuestions = applyQuestions.data.applyQuestions.filter(
      (question) => !editApplyQuestions.find((editApplyQuestion) => editApplyQuestion.id === question.id),
    );
    createdQuestions.forEach((question) => {
      postApplyQuestion({ question: question.question, description: question.description });
    });
    updatedQuestions.forEach((question) => {
      patchApplyQuestion({
        id: question.id,
        question: question.question,
        description: question.description,
      });
    });
    deletedQuestions.forEach((question) => {
      deleteApplyQuestion({ id: question.id });
    });
  };

  useEffect(() => {
    if (applySetting) {
      setEditApplySetting(() => {
        return {
          id: applySetting.data.id,
          generation: applySetting.data.generation,
          openAt: applySetting.data.openAt,
          closeAt: applySetting.data.closeAt,
          content: applySetting.data.content,
        };
      });
    }

    if (applyQuestions) {
      setEditApplyQuestions(() => applyQuestions.data.applyQuestions);
    }
  }, [applyQuestions]);

  return (
    <div className="grid h-full w-full grid-cols-2 grid-rows-1 gap-4">
      <div className="mt-16 flex h-full w-full items-start">
        <div className="sticky top-16 h-fit w-full">
          <RecruitDescriptionAdmin applySetting={editApplySetting} setApplySetting={setEditApplySetting} />
        </div>
      </div>
      <div className="mt-16 flex h-full w-full items-start">
        <div className="h-5/6 w-full">
          <RecruitFormAdmin
            applyQuestions={editApplyQuestions}
            setApplyQuestions={setEditApplyQuestions}
            onSave={saveApplySettingAndQuestions}
          />
        </div>
      </div>
    </div>
  );
};

export default RecruitAdmin;
