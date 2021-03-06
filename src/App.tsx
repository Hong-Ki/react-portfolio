import React, { FC } from 'react';
import PageConatainer from './containers/PageContainer';
import ModalContainer from './containers/ModalContainer';

const App: FC = () => {
  return (
    <>
      <PageConatainer />
      <ModalContainer />
    </>
  );
};

export default App;
