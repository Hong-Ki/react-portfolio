import React, { useRef } from 'react';
import PageConatainer from './containers/PageContainer';
import ModalContainer from './containers/ModalContainer';

const App: React.FC = () => {
  return (
    <>
      <PageConatainer />
      <ModalContainer />
    </>
  );
};

export default App;
