import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Switch } from 'react-router';
import { createTheme } from '@mui/system';
import HomePage from './pages/HomePage';
import CreatePrep from './pages/CreatePrep';
import ResultPage from './pages/ResultPage';
import NavBar from './components/NavBar';
import Layout from './components/Layout';
const theme = createTheme({
  pallete: {},
});

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="/create" element={<CreatePrep />}></Route>
            <Route path="/result" element={<ResultPage />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
