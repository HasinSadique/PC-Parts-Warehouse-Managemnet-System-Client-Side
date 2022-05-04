import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router";
import AddItems from "./components/AddItems/AddItems";
import NotFound from "./components/NotFound/NotFound";
import InventoryList from "./components/InventoryList/InventoryList";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App bg-slate-900 ">
      <Navbar> </Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/add-items"
          element={
            <RequireAuth>
              <AddItems></AddItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <InventoryList></InventoryList>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer> </Footer>
    </div>
  );
}

export default App;
