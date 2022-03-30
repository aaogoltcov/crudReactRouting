import {Form, Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import {Navigate, useLocation, useParams, useSearchParams} from "react-router-dom";
import SendNewPost from "../services/SendNewPost";

export default function NewPost(props) {
    const [id, setId] = useState(0);
    const [postTitle, setTitlePost] = useState(String());
    const [postText, setPostText] = useState(String());
    const [isLoading, setLoading] = useState(false);
    const [isPostSent, setIsPostSent] = useState(true);
    const [buttonSubmit, setButtonSubmit] = useState(false);
    const [isRedirect, setIsRedirect] = useState(false);

    useEffect(() => {
        if (typeof props.post.content !== 'undefined') {
            setId(props.post.id);
            setTitlePost(props.post.content.title);
            setPostText(props.post.content.text);
        }
    }, [props])

    SendNewPost(
        'http://localhost:7779/posts',
        isPostSent,
        setLoading,
        postTitle,
        postText,
        setIsPostSent,
        setTitlePost,
        setPostText,
        setIsRedirect,
        buttonSubmit,
        id,
    )

    function requestSendNewPostHandle(event) {
        event.preventDefault();
        if (postTitle.length > 0 && postText.length > 0) {
            setButtonSubmit(!buttonSubmit);
            setIsPostSent(false);
        }
    }

    return (
        <>
            {isRedirect && <Navigate to="/" />}
            {isLoading && <h3 className="w-50 m-4 g-4">Uploading...</h3>}
            {!isLoading && <Form className="w-50 m-4 g-4">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Название поста</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите название"
                        value={postTitle}
                        onChange={e => setTitlePost(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        Название должно ёмко охарактеризовать ваш пост.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Текст поста</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={postText}
                        onChange={e => setPostText(e.target.value)}
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    onClick={requestSendNewPostHandle}>
                    Отправить
                </Button>
            </Form>}
        </>

    );

}