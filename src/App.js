import "./App.css";
import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import NeosNavbar from "./Components/NeosNavbar/NeosNavbar";
import NeosFooter from "./Components/NeosFooter/NeosFooter";


function App() {
  return (
    <div className="App">
      <NeosNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <NeosFooter />
    </div>
  );
}

export default App;
