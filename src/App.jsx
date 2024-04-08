import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Projects/Auth/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
