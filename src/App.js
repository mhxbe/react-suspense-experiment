import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import Loading from './components/Loading';

const Purple = lazy(() => import('./modules/Purple'));

const Blue = lazy(() => import('./modules/Blue'));

function LazyPurple() {
  const data = { name: 'Slim Shady' };
  return (
    <Suspense fallback={<Loading />}>
      <Purple data={data} />
    </Suspense>
  );
}

function LazyBlue() {
  return (
    <Suspense fallback={<Loading />}>
      <Blue />
    </Suspense>
  );
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

      <Route exact path="/" component={Home} />
      <Route path="/purple" component={LazyPurple} />
      <Route path="/blue" component={LazyBlue} />
    </main>
  );
};

export default App;
