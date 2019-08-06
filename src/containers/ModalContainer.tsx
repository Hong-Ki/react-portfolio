import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StoreState } from '../modules/index';
import { actionCreators as modalActions } from '../modules/actions/modal';
import { actionCreators as pagesActions } from '../modules/actions/pages';
import { List } from 'immutable';

import { FloatingButton } from '../components/Button/Button';
import Menu from '../components/Menu/Menu';

interface Props {
  isVisible: boolean;
  menus: List<string>;
  currentMenu: string;
  ModalActions: typeof modalActions;
  PagesActions: typeof pagesActions;
}

class ModalContainer extends React.Component<Props> {
  onClick = () => {
    const {
      ModalActions: { toggleVisible },
    } = this.props;
    toggleVisible();
  };

  onSeletcMenu = (menu: string) => {
    const { PagesActions, ModalActions } = this.props;
    ModalActions.toggleVisible();
    PagesActions.setMenu(menu);
  };

  render() {
    const { isVisible, menus, currentMenu } = this.props;
    const { onClick, onSeletcMenu } = this;
    return (
      <>
        <FloatingButton onClick={onClick} isVisible={isVisible} />
        <Menu
          menus={menus}
          isVisble={isVisible}
          onSelectMenu={onSeletcMenu}
          currentMenu={currentMenu}
        />
      </>
    );
  }
}

export default connect(
  ({ modal, pages }: StoreState) => ({
    isVisible: modal.get('isVisible'),
    menus: pages.get('menus'),
    currentMenu: pages.get('current'),
  }),
  dispatch => ({
    ModalActions: bindActionCreators(modalActions, dispatch),
    PagesActions: bindActionCreators(pagesActions, dispatch),
  }),
)(ModalContainer);
