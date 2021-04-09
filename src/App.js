import NavBar from './components/NavBar';
import Home from './components/Home';
import Create from './components/Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Detail from './components/Detail';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>

    <div className="App">
        <NavBar />
      <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <Detail />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
      </div>
    </div>
    </Router>

  );
}

export default App;