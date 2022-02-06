import React, { createContext } from 'react';
import { IAppContext } from './types';

const initUsersState = {
  users: {},
  setUsers: () => {},
};

const AppContext = createContext<IAppContext>(initUsersState);

export default AppContext;