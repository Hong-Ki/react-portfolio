import React, { FC } from 'react';
import styles from './Main.module.scss';
import Page from '../Page/Page';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  id?: string;
  current: string;
}

const Main: FC<Props> = ({ id, current }) => {
  return (
    <Page backgroundText={['PORT', 'FOLIO']} id={id} current={current}>
      <div className={cx('top')}>
        <div className={cx('box', 'left')}>
          <span className={cx('blur')}>Hello,</span>
          <span className={cx('blur')}>I am</span>
        </div>
        <div className={cx('box', 'right')}>
          <span className={cx('neon', 'big')}>Hong-ki Min</span>
          <span className={cx('neon')}>Web Developer</span>
        </div>
      </div>
      <div className={cx('bottom', 'box')}>
        <span className={cx('blur')}>Welcom to</span>
        <span className={cx('neon', 'big')}>PORTFOLIO SITE</span>
      </div>
    </Page>
  );
};

export default Main;
