const menu = [];
const guestOnlyMenu = [
  {
    id: 'intro',
    title: '소개',
    path: '/',
    haveChild: false,
    showOnly: ['guest'],
  },
  {
    id: 'recruit',
    title: '모집',
    path: '/recruit',
    haveChild: true,
    showOnly: ['guest'],
  },
];
const userOnlyMenu = [
  {
    id: 'home',
    title: '홈',
    path: '/',
    haveChild: false,
    showOnly: ['user'],
  },
  {
    id: 'board',
    title: '게시판',
    path: '/board',
    haveChild: true,
    showOnly: ['user'],
  },
  {
    id: 'schedule',
    title: '일정',
    path: '/schedule',
    haveChild: false,
    showOnly: ['user'],
  },
  {
    id: 'camp',
    title: '캠프',
    path: '/camp',
    haveChild: true,
    showOnly: ['user'],
  },
  {
    id: 'gpt',
    title: 'GPT',
    path: '/gpt',
    haveChild: false,
    showOnly: ['user'],
  },
];
const adminOnlyMenu = [
  {
    id: 'admin',
    title: '관리',
    path: '/admin',
    haveChild: true,
    showOnly: ['admin'],
  },
];

const headerMenu = {
  guest: [...menu, ...guestOnlyMenu],
  user: [...menu, ...userOnlyMenu],
  admin: [...menu, ...userOnlyMenu, ...adminOnlyMenu],
};

export default headerMenu;
