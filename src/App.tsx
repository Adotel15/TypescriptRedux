
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Pages
import Layout from './pages/Layout';
import Inicio from './pages/Inicio';
import Form from './pages/Form';
import Login from './pages/Login';
import Usuario from './pages/Usuario';


import './scss/app.scss'

function App() {

    return (
      <BrowserRouter>
        <Routes>

          <Route path = "/login" element = { <Login /> } />
          
          <Route path = "/" element = { <Layout /> } >
            <Route index element = { <Inicio /> } />
            <Route path = "editar/:id" element = { <Form /> } />
            <Route path = "usuario/:id" element = { <Usuario /> } />
          </Route>

          
        </Routes>
      </BrowserRouter>
      
    );
}

export default App;
