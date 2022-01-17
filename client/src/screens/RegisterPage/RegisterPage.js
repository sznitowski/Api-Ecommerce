import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage.js/ErrorMessage";
import MainScreen from "../../components/MainScreen";
import { Form, Button } from "react-bootstrap";
import { register } from "../../actions/userActions";


function RegisterPage({ history }) {

    const [firstName, setfirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);


    const dispatch = useDispatch();

    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;


    useEffect(() => {
        if (userInfo) {
            history.push("/user");
        }
    }, [history, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Passwords do not match");
        } else dispatch(register(firstName, lastName, email, age, password, confirmPassword));
    };


    return (
        <MainScreen title='Regist'>

            <div className='registContainer'>
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
                {loading && <Loader />}

                <Form onSubmit={submitHandler}>

                    <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label>name</Form.Label>
                        <Form.Control
                            type="name"
                            placeholder="Please enter your name"
                            value={firstName}
                            onChange={(e) => setfirstName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control
                            type="lastname"
                            placeholder="Please enter your lastname"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Please enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Please enter a valid date of birt"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Please enter a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="please confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>

            </div>
        </MainScreen>

    )
}

export default RegisterPage
