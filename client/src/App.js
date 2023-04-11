import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Switch } from "react-router";
import { createTheme } from "@mui/system";
import HomePage from "./pages/HomePage";
import CreatePrep from "./pages/CreatePrep";
import ResultPage from "./pages/ResultPage";
import NavBar from "./components/NavBar";
import Layout from "./components/Layout";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  localStorage.setItem(
    "prep-information",
    JSON.stringify({
      data: {},
      options: {},
      numOfThesis: 0,
      numOfQuestions: 0,
    })
  );
  // localStorage.clear();
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
