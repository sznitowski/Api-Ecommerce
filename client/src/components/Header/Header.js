
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../../actions/userActions";

const Header = () => {

    const history = useNavigate();

    const dispath = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const userInfo  = userLogin;

    const logoutHandler = () => {
        dispath(logout())
        history.push("/")
    }

    return (
        <div className='header-container'>
            <Navbar bg="info" expand="lg" variant="dark">
                <Container className='text-white'>
                    <Navbar.Brand>
                        <Link to='/'>
                            Users App
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Nav className="m-auto">
                            <Form className="d-flex m-auto" >
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-light">Search</Button>
                            </Form>
                        </Nav>

                        <Nav
                            className="my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/user">
                                <Link to='/user'>
                                    Users
                                </Link>

                            </Nav.Link>

                            <Nav.Link
                                onClick={logoutHandler}>
                                Logout
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
