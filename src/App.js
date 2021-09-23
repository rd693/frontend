import './App.css';
import React from "react"
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter ,Route } from "react-router-dom";
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import SignIn from './components/SignIn';



function App() {
  return (
  <BrowserRouter>
    <Header/>
    <main>
    <Route path="/"  component={Products} exact></Route>
    <Route path="/about"  component={AboutUs}></Route>
    <Route path="/signUp"  component={SignIn}></Route>
    </main>
    
    <Footer/>
    
   
    </BrowserRouter>
  );
}

export default App;
