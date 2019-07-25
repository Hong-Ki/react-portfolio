import React from "react";
import Main from "../components/Main/Main";

interface Props {
  any?: any;
}
interface State {
  any?: any;
}

class PageContainer extends React.Component<Props, State> {
  render() {
    return (
      <div className="wrapper">
        <Main />
      </div>
    );
  }
}

export default PageContainer;
