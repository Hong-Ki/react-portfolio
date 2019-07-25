import { createAction, handleActions } from "redux-actions";
import { Map, List } from "immutable";

const SET_CURRENT_MENU = "modal/SET_CURRENT_MENU";
const SET_IS_VISIBLE = "modal/SET_IS_VISIBLE";

export const setCurrentMenu = createAction(SET_CURRENT_MENU);
export const setIsVisble = createAction(SET_IS_VISIBLE);

interface State {
  menus: string[];
}

const initialSate = Map({
  menus: List(["HOME", "THANKS"]),
  isVisible: false,
  currentMenu: "HOME"
});

export default handleActions(
  { [SET_CURRENT_MENU]: (state, action) => {} },
  initialSate
);
