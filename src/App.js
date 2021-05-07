import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Create from './components/Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Detail from './components/postDetail/Detail';
import NotFound from './components/NotFound';
import Signin from './components/auth/SignIn/Signin';
import Signup from './components/auth/SignUp/Signup';
import { auth } from './firebase';

function App() {

    const [user, setUser] = useState(null)

      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
          const user = {
            uid: userAuth?.uid,
            email: userAuth?.email
          }
          if (userAuth) {
            //console.log(userAuth)
            setUser(user)
          } else {
            setUser(null)
          }
        })
        return unsubscribe
      }, [])

  return (
    <Router>
    <div className="App">
        <NavBar user={user}/>
      <div className="content" style={{margin:'3% auto'}}>
          <Switch>
            <Route exact path="/" component={Home}/>
          {user &&  <Route path="/create" component={Create}/>}
            <Route path="/posts/:id" component={Detail}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/signup" component={Signup}/>
            <Route path="*" component={NotFound}/>
          </Switch>
      </div>
    </div>
    </Router>

  );
}

export default App;
