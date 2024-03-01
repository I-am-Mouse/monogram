import './App.scss';
import Header from './components/header';
import Main from './components/Main';
import Footer from './components/footer';

import { useState } from "react";

function App() {
  
  const [currency, setCurrency] = useState("");
  return (
    <>
      <Header currency={currency} setCurrency={setCurrency}/>
      <Main currency={currency} setCurrency={setCurrency}/> 
      <Footer />
    </>
  );
}

export default App;
