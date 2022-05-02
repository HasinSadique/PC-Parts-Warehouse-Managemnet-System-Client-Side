import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router";
import AddItems from "./components/AddItems/AddItems";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App bg-slate-900 ">
      <Navbar> </Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-items" element={<AddItems></AddItems>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer> </Footer>
    </div>
  );
}

export default App;
