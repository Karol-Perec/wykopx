import { PropsWithChildren, useMemo } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import { AuthData } from 'hooks/api/useLogin';
import AuthContext, { AuthContextInterface } from './AuthContext';

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [authData, setAuthData] = useLocalStorage<AuthData | undefined>('auth', undefined);

  const value = useMemo<AuthContextInterface>(
    () => ({
      saveAuthData: (data) => setAuthData(data),
      authData,
    }),
    [authData, setAuthData]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
