import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/user/Home";
import Register from "./pages/user/Register";
import Login from "./pages/user/Login";
import Public from "./routes/Public";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Public />}>
          <Route index element={<Home />}></Route>
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
