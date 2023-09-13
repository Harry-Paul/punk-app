import logo from './logo.svg';
import './App.css';
import Root from './components/Root/root';
import Product from './components/Product/product';
import Products from './components/Products/products';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Root/>}/>
          <Route exact path="/product" element={<Product/>}/>
          <Route exact path="/products" element={<Products/>}/>
        </Routes>
      </div>
      </Router>
  );
}

export default App;
