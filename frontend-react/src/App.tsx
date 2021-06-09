import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './routes/home';
import About from './routes/about';
import Faqs from './routes/faqs';
import Footer from './components/footer';
import Category from './routes/category';
import { BrowserRouter, Route } from 'react-router-dom';
import Modals from './components/modals';


function App() {
  return (
    <div className="App">
      <Header/>
      <Modals/>
      <BrowserRouter>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/faqs" component={Faqs} />
        <Route exact={true} path="/:categoryName" component={Category} />
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
