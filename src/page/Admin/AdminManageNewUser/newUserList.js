const newUsers = [
  {
    id: 1,
    studentNumber: '202255623',
    name: '한대희',
    email: 'daehee@pusan.ac.kr',
    phone: '010-1234-5678',
    status: '승인대기',
    apply: {
      applyQuestion: ['동아리 지원 동기 (300자 이내)', '동아리에서 하고 싶은 활동 (300자 이내)'],
      applyAnswer: [
        '제가 동아리에 지원한 동기는 무엇인지 맞춰보세요',
        '제가 동아리에서 하고 싶은 활동은 무엇인지 맞춰보세요',
      ],
    },
  },
  {
    id: 2,
    studentNumber: '202255624',
    name: '한대희2',
    email: 'daehee2@pusan.ac.kr',
    phone: '010-1234-5679',
    status: '승인대기',
    apply: {
      applyQuestion: ['동아리 지원 동기 (300자 이내)', '동아리에서 하고 싶은 활동 (300자 이내)'],
      applyAnswer: [
        '제가 동아리에 지원한 동기는 무엇인지 맞춰보세요2',
        '제가 동아리에서 하고 싶은 활동은 무엇인지 맞춰보세요2',
      ],
    },
  },
  {
    id: 3,
    studentNumber: '202255625',
    name: '한대희3',
    email: 'daehee3@pusan.ac.kr',
    phone: '010-1234-5670',
    status: '승인대기',
    apply: {
      applyQuestion: ['동아리 지원 동기 (300자 이내)', '동아리에서 하고 싶은 활동 (300자 이내)'],
      applyAnswer: [
        '제가 동아리에 지원한 동기는 무엇인지 맞춰보세요3',
        '제가 동아리에서 하고 싶은 활동은 무엇인지 맞춰보세요3',
      ],
    },
  },
  {
    id: 4,
    studentNumber: '202255625',
    name: '한대희4',
    email: 'daehee3@pusan.ac.kr',
    phone: '010-1234-5670',
    status: '승인대기',
    apply: {
      applyQuestion: ['동아리 지원 동기 (300자 이내)', '동아리에서 하고 싶은 활동 (300자 이내)'],
      applyAnswer: [
        '제가 동아리에 지원한 동기는 무엇인지 맞춰보세요3',
        '제가 동아리에서 하고 싶은 활동은 무엇인지 맞춰보세요3',
      ],
    },
  },
  {
    id: 5,
    studentNumber: '202255625',
    name: '한대희5',
    email: 'daehee3@pusan.ac.kr',
    phone: '010-1234-5670',
    status: '승인대기',
    apply: {
      applyQuestion: ['동아리 지원 동기 (300자 이내)', '동아리에서 하고 싶은 활동 (300자 이내)'],
      applyAnswer: [
        '제가 동아리에 지원한 동기는 무엇인지 맞춰보세요3',
        '제가 동아리에서 하고 싶은 활동은 무엇인지 맞춰보세요3',
      ],
    },
  },
  {
    id: 6,
    studentNumber: '202255625',
    name: '한대희6',
    email: 'daehee3@pusan.ac.kr',
    phone: '010-1234-5670',
    status: '승인대기',
    apply: {
      applyQuestion: ['동아리 지원 동기 (300자 이내)', '동아리에서 하고 싶은 활동 (300자 이내)'],
      applyAnswer: [
        '제가 동아리에 지원한 동기는 무엇인지 맞춰보세요3',
        '제가 동아리에서 하고 싶은 활동은 무엇인지 맞춰보세요3',
      ],
    },
  },
  {
    id: 7,
    studentNumber: '202255625',
    name: '한대희6',
    email: 'daehee3@pusan.ac.kr',
    phone: '010-1234-5670',
    status: '승인대기',
    apply: {
      applyQuestion: ['동아리 지원 동기 (300자 이내)', '동아리에서 하고 싶은 활동 (300자 이내)'],
      applyAnswer: [
        '제가 동아리에 지원한 동기는 무엇인지 맞춰보세요3',
        '제가 동아리에서 하고 싶은 활동은 무엇인지 맞춰보세요3',
      ],
    },
  },
  {
    id: 8,
    studentNumber: '202255625',
    name: '한대희6',
    email: 'daehee3@pusan.ac.kr',
    phone: '010-1234-5670',
    status: '승인대기',
    apply: {
      applyQuestion: ['동아리 지원 동기 (300자 이내)', '동아리에서 하고 싶은 활동 (300자 이내)'],
      applyAnswer: [
        '제가 동아리에 지원한 동기는 무엇인지 맞춰보세요3',
        '제가 동아리에서 하고 싶은 활동은 무엇인지 맞춰보세요3',
      ],
    },
  },
  {
    id: 9,
    studentNumber: '202255625',
    name: '한대희6',
    email: 'daehee3@pusan.ac.kr',
    phone: '010-1234-5670',
    status: '승인대기',
    apply: {
      applyQuestion: ['동아리 지원 동기 (300자 이내)', '동아리에서 하고 싶은 활동 (300자 이내)'],
      applyAnswer: [
        '제가 동아리에 지원한 동기는 무엇인지 맞춰보세요3',
        '제가 동아리에서 하고 싶은 활동은 무엇인지 맞춰보세요3',
      ],
    },
  },
  {
    id: 10,
    studentNumber: '202255625',
    name: '한대희6',
    email: 'daehee3@pusan.ac.kr',
    phone: '010-1234-5670',
    status: '승인대기',
    apply: {
      applyQuestion: ['동아리 지원 동기 (300자 이내)', '동아리에서 하고 싶은 활동 (300자 이내)'],
      applyAnswer: [
        '제가 동아리에 지원한 동기는 무엇인지 맞춰보세요3',
        '제가 동아리에서 하고 싶은 활동은 무엇인지 맞춰보세요3',
      ],
    },
  },
  {
    id: 11,
    studentNumber: '202255625',
    name: '한대희6',
    email: 'daehee3@pusan.ac.kr',
    phone: '010-1234-5670',
    status: '승인대기',
    apply: {
      applyQuestion: ['동아리 지원 동기 (300자 이내)', '동아리에서 하고 싶은 활동 (300자 이내)'],
      applyAnswer: [
        '제가 동아리에 지원한 동기는 무엇인지 맞춰보세요3',
        '제가 동아리에서 하고 싶은 활동은 무엇인지 맞춰보세요3',
      ],
    },
  },
  {
    id: 12,
    studentNumber: '202255625',
    name: '한대희6',
    email: 'daehee3@pusan.ac.kr',
    phone: '010-1234-5670',
    status: '승인대기',
    apply: {
      applyQuestion: ['동아리 지원 동기 (300자 이내)', '동아리에서 하고 싶은 활동 (300자 이내)'],
      applyAnswer: [
        '제가 동아리에 지원한 동기는 무엇인지 맞춰보세요3',
        '제가 동아리에서 하고 싶은 활동은 무엇인지 맞춰보세요3',
      ],
    },
  },
];

export default newUsers;
