import { Route, Routes } from "react-router-dom";
import Date from "./pages/Date";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/date" element={<Date />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
