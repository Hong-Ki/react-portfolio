import { handleActions } from 'redux-actions';
import { Record } from 'immutable';
import { TOGGLE_VISIBLE, TOGGLE_IS_RENDER } from '../actions/modal';

interface State {
  isVisible: boolean;
  isRender: boolean;
}
const initialSateRecord = Record({
  isVisible: false,
  isRender: false,
});

const initialSate: Record<State> = initialSateRecord();
export type ModalState = Record<State>;

export default handleActions<ModalState, any>(
  {
    [TOGGLE_VISIBLE]: state => {
      return state.set('isVisible', !state.get('isVisible'));
    },
    [TOGGLE_IS_RENDER]: state => {
      return state.set('isRender', !state.get('isRender'));
    },
  },
  initialSate,
);
