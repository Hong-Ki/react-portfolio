import React, { SFC } from 'react';
import Page from '../Page/Page';

import styles from './Thanks.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  id: string;
  current: string;
}

const Thanks: SFC<Props> = ({ id, current }) => {
  return (
    <Page id={id} current={current}>
      <div className={cx('message')}>
        <span className={cx('neon')}>Thanks</span>
        <span>for visit!!</span>
      </div>
    </Page>
  );
};

export default Thanks;
