import {ThemeProvider} from "react-bootstrap";
import NavBar from "./NavBar";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import PostList from "./PostList";
import Post from "./Post";
import NewPost from "./NewPost";
import {useState} from "react";

export default function Container() {
    let navigate = useNavigate();
    const [editPost, setEditPost] = useState({});

    function EditPostClickHandle(post) {
        setEditPost(post);
        navigate('/newPost');
    }

    return (
        <Routes>
            <Route exact path="/" element={<PostList postEditCallback={EditPostClickHandle}/>}>
                <Route path=":postId" element={<Post />} />
            </Route>
            <Route path="/newPost" element={<NewPost post={editPost}/>} />
        </Routes>
    )
}