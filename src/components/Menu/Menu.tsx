import React, { SFC } from 'react';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { List } from 'immutable';
import BackgroundText from '../BackgroundText/BackgroundText';

const cx = classNames.bind(styles);

interface Props {
  menus: List<string>;
  isVisble: boolean;
  currentMenu: string;
  onSelectMenu(menu: string): void;
}

const Menu: SFC<Props> = ({ menus, isVisble, onSelectMenu, currentMenu }) => {
  const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const {
      currentTarget: { textContent },
    } = e;
    if (textContent) {
      onSelectMenu(textContent);
    }
  };
  const elements = menus.map(menu => (
    <li
      className={cx({ active: currentMenu === menu })}
      key={menu}
      onClick={onClick}
    >
      {menu}
    </li>
  ));
  return (
    <div
      className={cx('modal', {
        show: isVisble,
        hide: !isVisble,
      })}
    >
      <BackgroundText texts={['MENU']} />
      <ul>{elements}</ul>
    </div>
  );
};

export default Menu;
