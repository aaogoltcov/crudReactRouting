import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "./components/Container";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "react-bootstrap";
import NavBar from "./components/NavBar";

function App() {
  return (
      <BrowserRouter>
        <ThemeProvider
            breakpoints={['sm',]}
        >
          <NavBar />
          <Container />
        </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
