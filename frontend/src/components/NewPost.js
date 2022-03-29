import {Form, Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import { Navigate  } from "react-router-dom";

export default function NewPost() {
    const [postTitle, setTitlePost] = useState(String());
    const [postText, setPostText] = useState(String());
    const [isLoading, setLoading] = useState(false);
    const [isPostSent, setIsPostSent] = useState(true);
    const [buttonSubmit, setButtonSubmit] = useState(false);
    const [isRedirect, setIsRedirect] = useState(false);

    useEffect(() => {
        if (!isPostSent) {
            setLoading(true);
            const request = setTimeout(async () => {
                await fetch('http://localhost:7779/posts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        id: 0,
                        content: {
                            title: postTitle,
                            text: postText,
                        },

                    }),
                });
                setIsPostSent(true);
                setLoading(false);
                setTitlePost(String());
                setPostText(String());
                setIsRedirect(true);
            }, 3000);
            return () => clearTimeout(request);
        }
    }, [buttonSubmit])

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