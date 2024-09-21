import './App.css';
import Home from "./components/Home Page/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Package from './components/Package/Package';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <Router>
      <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/package/yargs' element={<Package />} />
          <Route path='/package' element={<Detail />} />
      </Routes>
    </Router>
      
  );
}

export default App;
