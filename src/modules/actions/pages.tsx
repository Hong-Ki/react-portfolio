import { createAction } from "redux-actions";

export const SET_MENU = "modal/SET_MENU";

export type SetMenuPayload = string;

export const actionCreators = {
  setMenu: createAction<SetMenuPayload>(SET_MENU)
};
