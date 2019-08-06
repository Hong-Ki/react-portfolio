import React, { FC, useState } from 'react';
import Page from '../Page/Page';
import SkillDetail from './SkillDetail';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  RechartsFunction,
} from 'recharts';

import classNames from 'classnames/bind';
import styles from './AboutMe.module.scss';

const cx = classNames.bind(styles);

interface Props {
  id: string;
  current: string;
}

interface State {
  skill: string;
  score: number;
}

type SkillState = State | null | undefined;

const chartData = [
  { skill: 'React', score: 6 },
  { skill: 'TypeScript', score: 4 },
  { skill: 'JavaScript', score: 7 },
  { skill: 'CSS', score: 5 },
  { skill: 'SASS', score: 5 },
  { skill: 'Spring', score: 7 },
  { skill: 'Java', score: 7 },
  { skill: 'PostgreSql', score: 5 },
];

const AboutMe: FC<Props> = ({ current, id }) => {
  const [skill, setSkill] = useState<SkillState>(null);

  const onMouseOver: RechartsFunction = e => {
    const skill = chartData.find(data => data.skill === e.value);
    setSkill(null);
    setSkill(skill);
  };

  const onMouseLeave: RechartsFunction = e => {
    setSkill(null);
  };

  return (
    <Page backgroundText={['ABOUT', 'ME']} id={id} current={current}>
      <div className={cx('top')}>
        <div className={cx('info')}>
          <div>
            <span className={cx('subtitle')}>Birth.</span>
            <span className={cx('value')}>Hong-Ki Min</span>
          </div>
          <div>
            <span className={cx('subtitle')}>Mail.</span>
            <span className={cx('value')}>1992. 2. 23</span>
          </div>
          <div>
            <span className={cx('subtitle')}>Git-bub.</span>
            <span className={cx('value')}>minhk3259@gmail.com</span>
          </div>
        </div>
        <div className={cx('career')}>
          <span className={cx('subtitle')}>Career.</span>
          <ul>
            <li>(주)ESE 2016.08.01 - 2018.05.31</li>
          </ul>
        </div>
      </div>
      <div className={cx('bottom')}>
        <span className={cx('subtitle')}>Skills.</span>
        <div className={cx('skill')}>
          <div className={cx('chart')}>
            <RadarChart
              cx={300}
              cy={200}
              outerRadius={150}
              width={600}
              height={400}
              data={chartData}
            >
              <PolarGrid />
              <PolarAngleAxis
                dataKey="skill"
                stroke={'#ffffff'}
                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
              />
              <PolarRadiusAxis domain={[0, 10]} tick={false} axisLine={false} />
              <Radar
                name="My Skills"
                dataKey="score"
                stroke="#ffffff"
                fill="#87ff00"
                fillOpacity={0.4}
              />
            </RadarChart>
          </div>
          {!skill && <SkillDetail />}
          {skill && <SkillDetail score={skill.score} skillName={skill.skill} />}
        </div>
      </div>
    </Page>
  );
};

export default AboutMe;
