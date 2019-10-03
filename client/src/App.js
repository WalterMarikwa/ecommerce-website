import React from 'react';
//import './App.css';
//import products from "./Products.json"
import Footer from './components/utility/Footer';
import Home from './Site_pages/Home';
// import ProductPage from './Site_pages/Products';
import Contact from './Site_pages/Contact';
import Nav from './components/utility/Nav';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Products from './Site_pages/Products';

class App extends React.Component {
  render() { 
    return ( 
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/home" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
     );
  }
}
 
export default App;