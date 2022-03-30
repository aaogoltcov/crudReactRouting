import {Button, Card} from "react-bootstrap";
import {useState} from "react";
import DeletePost from "../services/DeletePost";

export default function Post(props) {
    const { id } = props.post || "";
    const { title, text } = props.post.content || "";
    const [isLoading, setLoading] = useState(false);
    const [isDeleted, setDeleted] = useState(false);
    const [deleteSubmit, setDeleteSubmit] = useState(false);

    function EditPostClickHandle(event) {
        event.preventDefault();
        props.postEditCallback(props.post);
    }

    DeletePost('http://localhost:7779/posts/', id, setLoading, isDeleted, setDeleted, deleteSubmit, props.postDeleteCallback);

    function DeletePostClickHandle(event) {
        event.preventDefault();
        setDeleted(true);
        setDeleteSubmit(!deleteSubmit);
    }

    function postClickEventHandle(event) {
        event.preventDefault();
        props.postClickFunc(props);
    }

    return (
        <Card className="w-50 m-4 g-4">
            <Card.Header onClick={postClickEventHandle} style={{cursor:"pointer"}} >Пост №{props.post.id}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
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