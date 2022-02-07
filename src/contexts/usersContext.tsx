import { useState, createContext, ReactNode, useEffect } from "react";

import { api } from "../services/api";

type UserProps = {
  name: string;
  age: number;
};

type UsersContextProps = {
  users: UserProps[];

  getUsers: () => Promise<void>;
};

type UsersProviderProps = {
  children: ReactNode;
};

export const UsersContext = createContext({} as UsersContextProps);

export function UsersProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    api.get("users").then((response) => {
      if (response.data) setUsers(response.data.data);
    });
  }, []);

  async function getUsers() {
    const { data } = await api.get("users");

    if (data) setUsers(data.data);
  }

  return (
    <UsersContext.Provider value={{ users, getUsers }}>
      {children}
    </UsersContext.Provider>
  );
}
