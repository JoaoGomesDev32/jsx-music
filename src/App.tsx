import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MusicPlayerPage from './pages/MusicPlayerPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1db954', // Cor verde do Deezer/Spotify
    },
    background: {
      default: '#121212',
      paper: '#1c1c1c',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/player/:id" element={<MusicPlayerPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
