import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import ListProduct from './components/product/ListProduct'
import AddProduct from './components/product/AddProduct'
import EditProduct from './components/product/EditProduct'
import ShowProduct from './components/product/ShowProduct'
import About from './components/pages/About'
import Home from './components/pages/Home'
import NavBar from './components/layout/Navbar'
import NotFound from './components/pages/NotFound'
import Contact from './components/pages/Contact';
import RequireAuth from './components/auth/RequireAuth'
import Login from './components/auth/Login'
import {AuthContextProvider} from './context/AuthContext'



function App() {
  return (
    <Router>
      <div className="App">
    
        <AuthContextProvider>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/about" component={Contact} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/product/add" component={props => <RequireAuth {...props} Component={AddProduct} />} /> 
          <Route exact path="/product/" component={props => <RequireAuth {...props} Component={ListProduct} />}/>
          <Route exact path="/product/edit/:id" component={props => <RequireAuth {...props} Component={EditProduct} />}/>
          <Route exact path="/product/show/:id" component={props => <RequireAuth {...props} Component={ShowProduct} />} />
          <Route component={NotFound} />
        </Switch>
        </AuthContextProvider>
      </div>
    </Router>
  );
}

export default App;
