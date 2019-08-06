import { createAction } from 'redux-actions';

export const TOGGLE_VISIBLE = 'modal/TOGGLE_VISIBLE';
export const TOGGLE_IS_RENDER = 'modal/TOGGLE_IS_RENDER';

export const actionCreators = {
  toggleVisible: createAction(TOGGLE_VISIBLE),
  toggleIsRender: createAction(TOGGLE_IS_RENDER),
};
