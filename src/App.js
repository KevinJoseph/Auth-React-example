import './App.css';
import ListProduct from './components/product/ListProduct'
import AddProduct from './components/product/AddProduct'
import EditProduct from './components/product/EditProduct'
import ShowProduct from './components/product/ShowProduct'
import About from './components/pages/About'
import Home from './components/pages/Home'
import NavBar from './components/layout/Navbar'
import NotFound from './components/pages/NotFound'
import Contact from './components/pages/Contact';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>

        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/about" component={Contact} />
          <Route exact path="/product/add" component={AddProduct} />
          <Route exact path="/product/" component={ListProduct} />
          <Route exact path="/product/edit/:id" component={EditProduct} />
          <Route exact path="/product/show/:id" component={ShowProduct} />
          <Route component={NotFound} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
