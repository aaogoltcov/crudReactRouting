import './App.css';
import {  BrowserRouter,  Routes,  Route, } from "react-router-dom";
import NavBar from "./components/NavBar";
import PostList from "./components/PostList";
import 'bootstrap/dist/css/bootstrap.min.css';
import NewPost from "./components/NewPost";
import {ThemeProvider} from "react-bootstrap";
import Post from "./components/Post";

function App() {
  return (
      <BrowserRouter>
          <ThemeProvider
              breakpoints={['sm',]}
          >
              <NavBar />
              <Routes>
                  <Route exact path="/" element={<PostList />}>
                      <Route path=":postId" element={<Post />} />
                  </Route>
                  <Route path="/newPost" element={<NewPost />} />
              </Routes>
          </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
