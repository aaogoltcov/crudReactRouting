import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "./components/Container";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ThemeProvider} from "react-bootstrap";
import NavBar from "./components/NavBar";
import PostList from "./components/PostList";
import Post from "./components/Post";
import NewPost from "./components/NewPost";

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
