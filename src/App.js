import React from 'react';
import Layout from './hoc/Layout/index';
import BurgerBuilder from './containers/BurgerBuilder';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
