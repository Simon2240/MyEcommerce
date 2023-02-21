import React from "react";
import styles from "./styles.css";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
const App = () => {
  return (
    <>
      <div className="App"> 
        <NavBar />
        <ItemListContainer greeting={"Bienvenidos a Marley Resto"}/>
      </div>
    </>
  );
}

export default App;
