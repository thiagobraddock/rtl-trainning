import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Card } from './components/card';
import { Header } from './components/header';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <>
          <Header />
          <Card />
        </>
      </Route>
      <Route path="/about">
        <Header />
        <h1>About Page</h1>
      </Route>
    </Switch>
  );
}

export default App;
