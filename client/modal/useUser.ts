import { useImmerState, getStore } from '.';
import { useCallback } from 'react';
import services from '../services';
import { message } from 'antd';
import { UserStorage } from '../utils/user-storage';

interface LoginDto {
  nickname: string;
  password: string;
  saved: boolean;
}

export function useUser(initState: any) {
  const [user, setUser] = useImmerState<any | null>(initState);

  // const login = useCallback(async ({ nickname, password, saved }: LoginDto) => {

  //   try {
  //     const userData = await services.user.login(nickname, password);
  //     UserStorage.setToken(userData.token, saved);
  //     setUser(() => userData);
  //     message.success('登录成功');
  //     const { extraHistory: { isFirstPage, history } } = getStore();
  //     if (isFirstPage) {
  //       history.replace('/');
  //     } else {
  //       history.goBack();
  //     }
  //   } catch (error) {
  //     message.error(error.message);
  //   }

  // }, [setUser]);

  const getUser = useCallback(async () => {
    const userData = await services.user.visitor.getBaseUser({
      nickname: 'Ryan',
    });
    setUser(() => userData);
  }, [setUser]);

  return {
    user,
    getUser,
  };
}
