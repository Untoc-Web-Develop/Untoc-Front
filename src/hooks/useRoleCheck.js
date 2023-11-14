import { useSelector } from 'react-redux';

const useRoleCheck = (level = 'user') => {
  const user = useSelector((state) => state.user);
  const type = user?.type || 'guest';
  const roleList = ['guest', 'user', 'admin'];
  const isLogin = roleList.indexOf(type) >= roleList.indexOf(level);

  return {
    isLogin,
    OnlyLogin: ({ children }) => (isLogin ? children : null),
  };
};

export default useRoleCheck;
