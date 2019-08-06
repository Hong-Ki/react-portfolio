import React, { SFC } from 'react';

import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import Page from '../Page/Page';

const cx = classNames.bind(styles);

interface Props {
  current: string;
  id: string;
}

const Contact: SFC<Props> = ({ id, current }) => {
  return (
    <Page id={id} current={current} backgroundText={['CONTACT', 'ME,']}>
      <div className={cx('contents')}>
        <span className={cx('title')}>Mail.</span>
        <span className={cx('value')}>minhk3259@gmail.com</span>
      </div>
      <div className={cx('contents')}>
        <span className={cx('title')}>Phone.</span>
        <span className={cx('value')}>010.9911.3259</span>
      </div>
      <div className={cx('contents')}>
        <span className={cx('title')}>Line.</span>
        <span className={cx('value')}>minong_92</span>
      </div>
      <div className={cx('ester_egg')}>{'Please....?'}</div>
    </Page>
  );
};

export default Contact;
