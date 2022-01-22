import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage.js/ErrorMessage";
import MainScreen from "../../components/MainScreen";
import { login } from "../../actions/userActions";
import { Button, Form, Row, Col } from "react-bootstrap"
import "./loginScreen.css";

function LoginPage({ history }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    const navigate = useNavigate();

    useEffect(() => {
         if (userInfo) {
            navigate("/user")
        } 
    }, [history, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();

        dispatch(login(email, password));
    };

    return <MainScreen title="Login">

        <div className="loginContainer">

            {error && <ErrorMessage variant='danger'>
            {error}</ErrorMessage>}
            {loading && <Loader />}

            <Form onSubmit={submitHandler}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        placeholder="Please enter your email here"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Please enter your password here"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Row className="py-3">
                    <Col>
                        New user ? <Link to="/register">Regist here</Link>
                    </Col>
                </Row>
            </Form>

        </div>

    </MainScreen>
}

export default LoginPage
