import React, { ReactNode, SFC } from 'react';
import BackgroundText from '../BackgroundText/BackgroundText';

import styles from './Page.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  children: ReactNode;
  current?: string;
  id?: string;
  backgroundText?: string[];
  direction?: 'row' | 'column';
}

const Page: SFC<Props> = ({
  children,
  backgroundText,
  id,
  current,
  direction = 'column',
}) => {
  return (
    <section className={cx('page', direction)} id={id}>
      {current === id && children}
      {backgroundText && <BackgroundText texts={backgroundText} />}
    </section>
  );
};

export default Page;
