import './App.css'
import 'react-toastify/dist/ReactToastify.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify'

import { getProducto } from './firebase/firebase';

import Navbar from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import Contacto from './components/Contacto/Contacto';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';

import { DarkModeProvider } from './context/DarkModeContext';
import { CarritoProvider } from './context/CarritoContext';
//import { cargarBDD } from './firebase/firebase';

const App = () => {

//cargarBDD()

  return (
    <>
    <BrowserRouter>
      <CarritoProvider>
        <DarkModeProvider>
          <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>
              <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
              <Route path='/contacto' element={<Contacto/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
          <ToastContainer/>
        </DarkModeProvider>
      </CarritoProvider>
    </BrowserRouter>
    
    </> 
  );
}

export default App;
