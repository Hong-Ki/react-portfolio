import React from "react";
import styles from "./styles/layout.module.scss";
import classNames from "classnames/bind";
import PageConatainer from "./containers/PageContainer";
import { FloatingButton } from "./components/Button/Button";
import ModalContainer from "./containers/ModalContainer";
const cx = classNames.bind(styles);

const App: React.FC = () => {
  return (
    <div className={cx("wrapper")}>
      <PageConatainer />
      <FloatingButton>a</FloatingButton>
      <ModalContainer />
    </div>
  );
};

export default App;
