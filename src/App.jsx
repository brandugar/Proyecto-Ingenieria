import logo from './logo.svg';
import Contact from './pages/contact'
import Index from './pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </div>

      </header>
    </div>
  );
}

export default App;
