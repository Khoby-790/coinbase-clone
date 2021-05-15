import { Fragment } from 'react';
import HomePage from './pages/HomePage';
import { Navbar } from './components'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Navbar />
      <BrowserRouter>
        <Route path="/" component={HomePage} />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
