import './App.css';
import Card from "./components/card"
import Page2 from './components/page2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Route  path="/" component={Card} exact />
      <Route path="/:id" component={Page2} exact/>
    </Router>


    // <div className="App">
    //   <Card />
    //   <Page2 />
    // </div>
  );
}

export default App;
