import { Fragment } from 'react';
import HomePage from './pages/HomePage';
import { Navbar } from './components'

function App() {
  return (
    <Fragment>
      <Navbar />
      <HomePage />
    </Fragment>
  );
}

export default App;
