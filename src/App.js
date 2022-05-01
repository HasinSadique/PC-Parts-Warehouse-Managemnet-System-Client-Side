import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="App bg-slate-900 ">
      <Navbar> </Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer> </Footer>
    </div>
  );
}

export default App;
