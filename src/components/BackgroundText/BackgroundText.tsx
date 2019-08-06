import React, { SFC } from 'react';
import styles from './BackgroundText.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  texts?: string[];
}

const BackgroundText: SFC<Props> = ({ texts = [] }) => {
  let index = 0;
  let length = 1;
  for (let val of texts) {
    if (length < val.length) {
      length = val.length;
    }
  }

  const elements = texts.map(text => (
    <svg
      key={index++}
      width={600}
      height={400}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={'0 -5 60 50'}
    >
      <text y={30} x={30} textAnchor={'middle'}>
        {text}
      </text>
    </svg>
  ));
  return <div className={cx('back')}>{elements}</div>;
};

export default BackgroundText;
