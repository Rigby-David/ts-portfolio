import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Layout from './Components/Header/Layout';
import Home from './Components/Home';
import Projects from './Components/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
