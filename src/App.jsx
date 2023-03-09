import "./styles.css";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/productosDetallados/ItemDetailContainer"
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
const App = () => {

  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/carrito" element={<Cart/>}/>
          <Route path="/menu" element={<ItemListContainer/>}/>
          <Route exact path="/detalle/:id" element = {<ItemDetailContainer/> } />
          <Route path="/" element={<ItemListContainer/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
