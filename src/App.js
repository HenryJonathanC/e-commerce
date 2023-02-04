
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <ProductListing />
          </Route>
          <Route path="/product/:productId">
            <ProductDetails />
          </Route>
          <Route>404 Not Found</Route>
        </Switch>        
      </Router>

    </div>
  );
}

export default App;
