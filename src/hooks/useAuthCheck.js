import { useSelector } from 'react-redux';

const useAuthCheck = (need = ['user']) => {
  const user = useSelector((state) => state.user);
  const roles = [...user.badgeKeys, !user.badgeKeys.includes('guest') && 'user'];
  const isPass = need.filter((role) => roles.includes(role)).length > 0;

  return {
    isPass,
    OnlyPass: ({ children }) => (isPass ? children : null),
  };
};

export default useAuthCheck;
