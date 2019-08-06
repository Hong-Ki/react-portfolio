import React, { ReactNode, SFC } from 'react';
import BackgroundText from '../BackgroundText/BackgroundText';

import styles from './Page.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  children: ReactNode;
  id?: string;
  current: string;
  backgroundText?: string[];
}

const Page: SFC<Props> = ({ children, backgroundText = [], id, current }) => {
  return (
    <section className={cx('page')} id={id}>
      {current === id && children}
      {backgroundText && <BackgroundText texts={backgroundText} />}
    </section>
  );
};

export default Page;
