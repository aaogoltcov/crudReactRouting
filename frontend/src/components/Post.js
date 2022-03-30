import {Button, Card} from "react-bootstrap";
import {Link, useHistory, useLocation, useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { useOutletContext } from "react-router-dom";
import DeletePost from "../services/DeletePost";

export default function Post(props) {
    const { id } = props.post || "";
    const { title, text } = props.post.content || "";
    const [postTitle, setTitlePost] = useState(String());
    const [postText, setPostText] = useState(String());
    const [isLoading, setLoading] = useState(false);
    const [isDeleted, setDeleted] = useState(false);
    const [deleteSubmit, setDeleteSubmit] = useState(false);


    // const postList = useOutletContext();
    // console.log("postList", postList);


    function EditPostClickHandle(event) {
        event.preventDefault();
        props.postEditCallback(props.post);
    }

    DeletePost('http://localhost:7779/posts/', id, setLoading, isDeleted, setDeleted, deleteSubmit, props.postDeleteCallback);

    function DeletePostClickHandle(event) {
        event.preventDefault();
        console.log("Tik");
        setDeleted(true);
        setDeleteSubmit(!deleteSubmit);

        // navigate("/", { replace: true });
    }

    function postClickEventHandle(event) {
        event.preventDefault();
        // console.log(event.target, props);
        props.postClickFunc(props);
    }

    return (
        <Card className="w-50 m-4 g-4">
            <Card.Header onClick={postClickEventHandle} style={{cursor:"pointer"}} >Пост №{props.post.id}</Card.Header>
            <Card.Body>
                <Card.Title>{title || postTitle}</Card.Title>
                <Card.Text>{text || postText}</Card.Text>
                <Button
                    onClick={EditPostClickHandle}
                    className="mr-2"
                    variant="primary"
                >Изменить</Button>
                <Button
                    onClick={DeletePostClickHandle}
                    className="m-2"
                    variant="primary"
                >Удалить</Button>
            </Card.Body>
        </Card>
    );

}