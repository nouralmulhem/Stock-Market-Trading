import { createContext, useContext, useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";

export type user = {
  id: number;
  name: string;
  type: string;
  username: string;
  money: number;
  objective: string;
  email: string;
};

type ProviderProps = {
  children: React.ReactNode;
};

type ContextValue = {
  currentUser: user | undefined;
};

const CurrentUserContext = createContext<ContextValue>({
  currentUser: undefined,
});

export function CurrentUserProvider({ children }: ProviderProps) {
  const [cookies] = useCookies(["user"]);
  const [currentUser, setCurrentUser] = useState<undefined | user>(undefined);

  useEffect(() => {
    if (cookies.user) {
      setCurrentUser(cookies.user);
    } else {
      setCurrentUser(undefined);
    }
  }, [cookies]);

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export function useCurrentUser() {
  return useContext(CurrentUserContext);
}
