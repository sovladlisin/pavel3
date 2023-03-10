import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Popup from './components/Popup';
import vladik from './components/vladik';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const [authWindow, setauthWindow] = React.useState(false)
  return <Router>


    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/vladik" component={vladik} />
      <Route exact path="/popup/in" component={Popup} />


    </Switch>

  </Router>

}

export default App;
