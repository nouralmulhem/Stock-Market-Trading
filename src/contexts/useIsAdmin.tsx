import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

type ProviderProps = {
  children: React.ReactNode;
};

type ContextValue = {
  isAdmin: boolean;
};

const IsAdminContext = createContext<ContextValue>({
  isAdmin: false,
});

export function IsAdminProvider({ children }: ProviderProps) {
  const [cookies] = useCookies(["user"]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (cookies.user) {
      setIsAdmin(cookies.user.type === "admin");
    }
  }, [cookies]);

  return (
    <IsAdminContext.Provider value={{ isAdmin }}>
      {children}
    </IsAdminContext.Provider>
  );
}

export function useIsAdmin() {
  return useContext(IsAdminContext);
}
