import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './assets/pages/Home';
import Secret from './assets/pages/Secret';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secret" element={<Secret />} />
      </Routes>
    </Router>
  );
}

export default App;