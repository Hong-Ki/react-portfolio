import React from "react";
import styles from "./Main.module.scss";
import Page from "../Page/Page";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Main: React.FC = props => {
  return (
    <Page>
      <div className={cx("back")}>
        <span>{"PORT"}</span>
        <span>{"FOLIO"}</span>
      </div>
      <div className={cx("top")}>
        <div className={cx("box", "left")}>
          <span className={cx("blur")}>Hello,</span>
          <span className={cx("blur")}>I am</span>
        </div>
        <div className={cx("box", "right")}>
          <span className={cx("big", "neon")}>Hong-ki Min</span>
          <span className={cx("neon")}>Web Developer</span>
        </div>
      </div>
      <div className={cx("bottom")}>
        <span className={cx("blur")}>Welcom to my</span>
        <span className={cx("neon", "big")}>PORTFOLIO SITE</span>
      </div>
    </Page>
  );
};

export default Main;
