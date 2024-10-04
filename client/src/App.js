import { BrowserRouter, Routes, Route } from "react-router-dom";
import Horizontalnav from "./Components/Horizontalnav";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Correct CSS import
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Correct JS import
import Search from "./Components/Search";
import Addemployee from "./Components/Addemployee";
import Editemployee from "./Components/Editemployee";
import Viewemployee from "./Components/Viewemployee";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Horizontalnav />
                <Search />
              </>
            }
          />
          <Route path="/addemployee" element={<Addemployee />} />
          <Route path="/editemployee/:empID" element={<Editemployee />} />
          <Route path="/viewemployee" element={<Viewemployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
