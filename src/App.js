import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import "./App.css";
import Header from "./components/Header";
import Main from "./pages";
import Footer from "./components/Footer";

function App() {
  AOS.init();
  emailjs.init("user_dAt6UJCBS42QlN5cHgAv9");
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
export default App;
