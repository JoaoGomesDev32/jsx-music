import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MusicPlayerPage from './pages/MusicPlayerPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/player/:id" element={<MusicPlayerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
