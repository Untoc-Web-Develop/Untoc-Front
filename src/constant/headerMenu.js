const guestOnlyMenu = [
  {
    id: 'intro',
    title: '소개',
    path: '/',
    haveChild: false,
    needRole: ['guest'],
  },
  {
    id: 'recruit',
    title: '모집',
    path: '/recruit',
    haveChild: true,
    needRole: ['guest'],
  },
];
const userOnlyMenu = [
  {
    id: 'home',
    title: '홈',
    path: '/',
    haveChild: false,
    needRole: ['user'],
  },
  {
    id: 'board',
    title: '게시판',
    path: '/board',
    haveChild: true,
    needRole: ['user'],
  },
  {
    id: 'schedule',
    title: '일정',
    path: '/schedule',
    haveChild: false,
    needRole: ['user'],
  },
  {
    id: 'camp',
    title: '캠프',
    path: '/camp',
    haveChild: true,
    needRole: ['user'],
  },
  {
    id: 'gpt',
    title: 'GPT',
    path: '/gpt',
    haveChild: false,
    needRole: ['user'],
  },
];
const adminOnlyMenu = [
  {
    id: 'admin',
    title: '관리',
    path: '/admin',
    haveChild: true,
    needRole: ['admin'],
  },
];

const menu = [...adminOnlyMenu, ...guestOnlyMenu, ...userOnlyMenu];

const roleChecker = (role, needRole) => {
  const remainRole = needRole.filter((r) => !role.includes(r));
  return remainRole.length === 0;
};

const headerMenu = (role) => {
  return menu.filter((tab) => {
    return roleChecker(role, tab.needRole);
  });
};

export default headerMenu;
