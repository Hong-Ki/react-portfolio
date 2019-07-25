import React from "react";

import styles from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const Button: React.SFC = props => {
  return <div>{props.children}</div>;
};
export const FloatingButton: React.SFC = props => {
  return (
    <div className={cx("floating")}>
      <div className={cx("bar", "origin")} />
    </div>
  );
};

export default Button;
