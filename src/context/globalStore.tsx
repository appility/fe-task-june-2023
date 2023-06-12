import { useReducer, createContext, PropsWithChildren } from "react";

export enum USER_ACTION {
  UPDATE = "UPDATE",
  DELETE_USER_BY_ID ="DELETE_USER_BY_ID"
}

const globalReducer = (state: any, action: any) => {
  switch (action.type) {
    case USER_ACTION:
      return {
        users: action.payload
      };
      case USER_ACTION.DELETE_USER_BY_ID: {
        const filteredUsers = state.users.filter(
          (user: any) => user.id !== action.user_id
        )
        return { users: filteredUsers}
      }
    default:
      return state;
  }
};

export const GlobalState = createContext({})

GlobalState.displayName = "GlobalState";

export const GlobalStateProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(globalReducer, {});

  const value = {
    ...state,
    update: (payload: any) => {
      dispatch({ type: USER_ACTION.UPDATE, payload});
    },
    delete: (id: number) => {
      dispatch({ type: USER_ACTION.DELETE_USER_BY_ID, id });
    }
  };
  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>;
}