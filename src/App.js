import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import FollowersPage from './pages/FollowersPage';
import FollowingPage from './pages/FollowingPage';
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu className="menuArea" />
        <Switch>
          <Route path="/" exact component={Profile} />
          <Route path="/messages" component={Messages} />
          <Route path="/followers" component={FollowersPage} />
          <Route path="/following" component={FollowingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
