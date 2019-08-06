import React, { FC } from 'react';
import styles from './Navigator.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  size: number;
  current: number;
  onClick(index: number): void;
}

const Navigator: FC<Props> = ({ size, current, onClick }) => {
  const dot = [];
  for (let i = 0; i < size; i++) {
    dot.push(
      <li key={i}>
        <div
          className={cx('dot', { active: current === i })}
          onClick={() => {
            onClick(i);
          }}
        />
      </li>,
    );
  }

  return <ul className={cx('navi')}>{dot}</ul>;
};

export default Navigator;
