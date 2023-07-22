import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { useState } from "react";

// TODO: props drilling, conditional rendering (Youtube)

function App() {
  let [page, setPage] = useState("about-me");

  return (
    <div className="App">
      <Header setPage={setPage} />
      {page === "about-me" ? <AboutMe /> : ""}
      {page === "portfolio" ? <Portfolio /> : ""}
      {page === "resume" ? <Resume /> : ""}
      {page === "contact" ? <Contact /> : ""}
      <Footer />
    </div>
  );
}

export default App;
