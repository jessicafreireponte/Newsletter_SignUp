import { BrowserRouter, Route, Routes } from "react-router-dom";
import Newsletter from "./pages/Newsletter";
import Subcribe from "./pages/Subcribe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Newsletter />} />
        <Route path="/subcribe" element={<Subcribe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
