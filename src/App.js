import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Loading from './components/Loading';

const Purple = lazy(() => import('./modules/Purple'));

const Blue = lazy(() => import('./modules/Blue'));

function PurpleWithData() {
  const data = { name: 'Slim Shady' };
  return <Purple data={data} />;
}

function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>This is the Home comopnent</p>
    </>
  );
}

const App = () => {
  return (
    <main>
      <Header />

      <hr />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/purple" component={PurpleWithData} />
          <Route path="/blue" component={Blue} />
        </Switch>
      </Suspense>
    </main>
  );
};

export default App;
