import "./App.css";
import { Login, Signup, Home } from "./pages";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route 
          path="/" 
          element={<Home />} />
          
          <Route 
          path="/login" 
          element={<Login />} />

          <Route 
          path="/signup" 
          element={<Signup />} />
          
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
