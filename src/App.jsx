import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Selection from "./components/Selection"
import Temple from "./components/Temple"
import Sanctuary from "./components/Sanctuary"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Selection />} />
        <Route path="/Temple" element={<Temple />} />
        <Route path="/Sanctuary" element={<Sanctuary />} />
      </Routes>
    </Router>
  );
}

export default App
