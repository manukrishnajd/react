import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbars from './Navbar';
import Card from './Card';

import Fetch from './Fetch';
import { store } from './Store';
import { Provider } from 'react-redux'
import { Counter } from './Counter';
import SumCalculator from './Memo';
import Detailmovie from './Detailmovie';
import ButtonAppBar from './Appbar';
import Count from './Count';
import Contexts from './Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Provider store={store}>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Navbars/>}>
  <Route path='/App' element={<App/>}/>
  <Route path='/context' element={<Contexts/>}/>
  <Route path='/fetch' element={<Fetch/>}/>
  <Route path='/appbar' element={<ButtonAppBar/>}/>
  <Route path='/view/:id' element={<Detailmovie/>}/>
  <Route path='register' element={<Register/>}/>
  <Route path='login' element={<Login/>}/>
  <Route path='card' element={<Card/>}/>
  <Route path='memo' element={<SumCalculator/>}/>
  <Route path='count' element={<Count/>}/>
  <Route path='counter' element={<Counter/>}/>
  </Route>
</Routes>

</BrowserRouter>
 
 </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
