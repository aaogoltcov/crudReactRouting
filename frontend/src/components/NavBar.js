import { Nav } from 'react-bootstrap';

export default function NavBar() {
    return (
        <Nav className="justify-content-end" activeKey="/">
            <Nav.Item>
                <Nav.Link href="/">Посты</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/newPost">Создать</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}