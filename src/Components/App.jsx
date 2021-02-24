import './App.css';
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact';

import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header></Header>

        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>

          <Route path="/about" exact>
            <About></About>
          </Route>

          <Route path="/portfolio" exact>
            <Portfolio></Portfolio>
          </Route>

          <Route path="/contact" exact>
            <Contact></Contact>
          </Route>
        </Switch>

      <Footer></Footer>

    </div>
  );
}

export default App;
