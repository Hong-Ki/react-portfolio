import React, { FC, useState, useEffect } from 'react';
import styles from './Projects.module.scss';
import classNames from 'classnames/bind';
import Page from '../Page/Page';
import Navigator from '../Navigator/Navigator';
import { CategoryType, Detail } from '../../common/ProjectsData';

import { ReactComponent as Link } from '../../imgs/icons/link.svg';

const cx = classNames.bind(styles);

interface Props {
  current: string;
  id: string;
  data?: CategoryType | null;
  backgroundText?: string[];
}

interface IsVisible {
  category: boolean;
  contents: boolean;
}

const getElements = (details: Detail[], key: string = ''): JSX.Element[] => {
  return details.map((detail, idx = 0) => (
    <React.Fragment key={`${key}_${idx++}`}>
      {detail.subtitle && (
        <span className={cx('subtitle')}>{detail.subtitle}</span>
      )}
      {detail.texts &&
        detail.texts.map((textObj, idx = 0) => {
          const { text, link } = textObj;

          return (
            <span key={`${key}_${idx++}`}>
              {text}
              {link && (
                <a key={`${key}_link_${idx++}`} href={link} target={'_blank'}>
                  <Link />
                </a>
              )}
            </span>
          );
        })}
      {detail.mediaUrls && (
        <div className={cx('img')}>
          {detail.mediaUrls.map((url, idx = 0) => {
            return <img key={`${key}_img_${idx++}`} src={url} alt={''} />;
          })}
        </div>
      )}
    </React.Fragment>
  ));
};

const Projects: FC<Props> = ({ current, id, data, backgroundText }) => {
  const [categoryIndex, setCategoryIndex] = useState<number>(0);
  const [contentsIndex, setContentsIndex] = useState<number>(0);

  const [isVisible, setIsVisible] = useState<IsVisible>({
    category: true,
    contents: true,
  });

  useEffect(() => {
    setCategoryIndex(0);
    setContentsIndex(0);
  }, [current]);

  useEffect(() => {
    setIsVisible({ category: true, contents: true });
  }, [categoryIndex, contentsIndex]);

  const onClick = {
    category: (index: number): void => {
      if (index !== categoryIndex) {
        setCategoryIndex(index);
        setContentsIndex(0);
        setIsVisible({ category: false, contents: false });
      }
    },
    contents: (index: number): void => {
      if (index !== contentsIndex) {
        setContentsIndex(index);
        setIsVisible({ category: true, contents: false });
      }
    },
  };

  /**
   * data가 존재해야 본문 렌더링
   */
  if (data && data.length > 0) {
    const { length: subjectsLength } = data;
    const {
      category: { title: categoryTitle, details: categoryDetails },
      contents,
    } = data[categoryIndex];
    const { title: contentsTitle, details: contentsDetails } = contents[
      contentsIndex
    ];

    const categoryElements = categoryDetails && getElements(categoryDetails);
    const contentsElements = contentsDetails && getElements(contentsDetails);
    return (
      <Page
        id={id}
        current={current}
        backgroundText={backgroundText}
        direction={'row'}
      >
        <div className={cx('wrapper')}>
          <div className={cx('wrapper', isVisible.category ? 'show' : 'hide')}>
            <span>{categoryTitle}</span>
            <div className={cx('contents')}>{categoryElements}</div>
          </div>
          <Navigator
            current={categoryIndex}
            size={subjectsLength}
            onClick={onClick.category}
          />
        </div>
        <div className={cx('wrapper', isVisible.category ? 'show' : 'hide')}>
          <div className={cx('wrapper', isVisible.contents ? 'show' : 'hide')}>
            <span>{contentsTitle}</span>
            <div className={cx('contents')}>{contentsElements}</div>
          </div>
          <Navigator
            current={contentsIndex}
            size={contents.length}
            onClick={onClick.contents}
          />
        </div>
      </Page>
    );
  }
  return (
    <Page
      id={id}
      current={current}
      backgroundText={backgroundText}
      direction={'row'}
    >
      {'데이터가 없습니다. 곧 준비하겠습니다.'}
    </Page>
  );
};

export default Projects;
