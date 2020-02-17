import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./pages";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  AOS.init();
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}
export default App;
