import React, { SFC } from "react";

import { ReactComponent as ReactIcon } from "../../imgs/skill/react.svg";
import { ReactComponent as JavaIcon } from "../../imgs/skill/java.svg";
import { ReactComponent as CssIcon } from "../../imgs/skill/css.svg";
import { ReactComponent as SassIcon } from "../../imgs/skill/sass.svg";
import { ReactComponent as TypeScriptIcon } from "../../imgs/skill/typescriptlang.svg";
import { ReactComponent as PosgreSqlIcon } from "../../imgs/skill/postgresql.svg";
import { ReactComponent as SpringIcon } from "../../imgs/skill/spring.svg";
import { ReactComponent as JavaScriptIcon } from "../../imgs/skill/javascript.svg";

import { ReactComponent as LeftArrow } from "../../imgs/skill/left-arrow.svg";

import styles from "./AboutMe.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  skillName?: string;
  score?: number;
}

const getIcon = (skillName: string): JSX.Element => {
  const width = "100%",
    height = "60%";
  switch (skillName.toLowerCase()) {
    case "react":
      return <ReactIcon width={width} height={height} />;
    case "java":
      return <JavaIcon width={width} height={height} />;
    case "css":
      return <CssIcon width={width} height={height} />;
    case "sass":
      return <SassIcon width={width} height={height} />;
    case "spring":
      return <SpringIcon width={width} height={height} />;
    case "javascript":
      return <JavaScriptIcon width={width} height={height} />;
    case "typescript":
      return <TypeScriptIcon width={width} height={height} />;
    case "postgresql":
      return <PosgreSqlIcon width={width} height={height} />;
  }

  return <div />;
};
const SkillDetail: SFC<Props> = ({ skillName, score }) => {
  return (
    <div className={cx("detail")}>
      {!skillName && !score && (
        <>
          <div className={cx("arrow")}>
            <LeftArrow />
            <LeftArrow />
            <LeftArrow />
          </div>
          <span className={cx("value")}>
            {"Put your mouse on the skill's name!"}
          </span>
        </>
      )}
      {skillName && score && (
        <>
          {getIcon(skillName)}
          <div className={cx("score")}>
            <span>{score}</span>
            <span>{" / 10"}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default SkillDetail;
