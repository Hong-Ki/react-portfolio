import { combineReducers } from 'redux';
import modal, { ModalState } from './reducers/modal';
import pages, { PagesState } from './reducers/pages';

export default combineReducers({
  modal,
  pages,
});

export interface StoreState {
  modal: ModalState;
  pages: PagesState;
}
