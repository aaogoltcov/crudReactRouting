import {Button, Card} from "react-bootstrap";
import {Link, useHistory, useLocation, useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Post(props) {
    const { id } = props.post || "";
    const { title, text } = props.post.content || "";
    let { postId } = useParams();
    console.log("post", id, title, text, props.post);
    // const [isLoading, setLoading] = useState(false);
    const [postTitle, setTitlePost] = useState(String());
    const [postText, setPostText] = useState(String());

    // useEffect(() => {
    //     setTitlePost(title);
    //     setPostText(text);
    // }, [])

    // useEffect(() => {
    //     if (!id) {
    //         setLoading(true);
    //         const request = setTimeout(async () => {
    //             const response = await fetch('http://localhost:7779/posts', {
    //                 method: 'POST',
    //                 headers: {'Content-Type': 'application/json;charset=utf-8'},
    //                 body: JSON.stringify({id: postId}),
    //             }).then(response => response.json());
    //             console.log(response);
    //             setLoading(false);
    //             // setTitlePost(request.content.title);
    //             // setPostText(request.content.text);
    //         }, 0);
    //         return () => clearTimeout(request);
    //     }
    // }, [])

    return (
        <Card className="w-50 m-4 g-4">
            <Link  to={`${props.post.id}`}>
                <Card.Header>Пост №{props.post.id}</Card.Header>
            </Link>
            <Card.Body>
                <Card.Title>{title || postTitle}</Card.Title>
                <Card.Text>{text || postText}</Card.Text>
                <Button
                    className="mr-2"
                    variant="primary"
                >Изменить</Button>
                <Button
                    className="m-2"
                    variant="primary"
                >Удалить</Button>
            </Card.Body>
        </Card>
    );

}