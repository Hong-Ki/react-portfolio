import React, { ReactNode } from "react";

import styles from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  children?: ReactNode;
  isVisible?: boolean;
  onClick?(): void;
}

const Button: React.SFC<Props> = ({ onClick, children }) => {
  return <div>{children}</div>;
};
export const FloatingButton: React.SFC<Props> = ({
  onClick,
  children,
  isVisible
}) => {
  return (
    <div className={cx("floating", { close: isVisible })} onClick={onClick}>
      <div className={cx("bar")} />
    </div>
  );
};

export default Button;
