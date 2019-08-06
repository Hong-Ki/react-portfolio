import { handleActions, Action } from 'redux-actions';
import { SET_MENU, SetMenuPayload } from '../actions/pages';
import { List, Record } from 'immutable';

interface State {
  menus: List<string>;
  previous: string;
  current: string;
  next: string;
}

const initialStateRecord = Record<State>({
  menus: List([
    'HOME',
    'ABOUT ME',
    'PROJECTS-CAREER',
    'PROJECTS-PERSNAL',
    'CONTACT',
    'THANKS',
  ]),
  previous: '',
  current: 'HOME',
  next: 'ABOUT ME',
});

const initialSate: Record<State> = initialStateRecord();
export type PagesState = Record<State>;

export default handleActions<PagesState, any>(
  {
    [SET_MENU]: (state, action: Action<SetMenuPayload>): PagesState => {
      const index = state
        .get('menus')
        .findIndex(menu => menu === action.payload);

      if (index < 0 || index > state.get('menus').size - 1) {
        return state;
      }

      return state
        .set('current', action.payload)
        .set('previous', index === 0 ? '' : state.getIn(['menus', index - 1]))
        .set(
          'next',
          index === state.get('menus').size - 1
            ? ''
            : state.getIn(['menus', index + 1]),
        );
    },
  },
  initialSate,
);
