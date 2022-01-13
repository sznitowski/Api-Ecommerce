import { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, Col, Row, Form } from 'react-bootstrap';
import MainScreen from '../../components/MainScreen';
import ErrorMessage from '../../components/ErrorMessage.js/ErrorMessage';
import LandingPage from '../LandingPage/LandingPage';
import axios from "axios";
import Loader from "../../components/Loader/Loader";

const RegisterPage = () => {

    const [firstName, setfirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage('Las contraseñas no coinciden')
        } else {
            setMessage(null)
            try {
                const config = {
                    headers: {
                        "content-Type": "application/json",
                    },
                };

                setLoading(true)

                const { data } = await axios.post(
                    "/api/user/sign-up",
                    { firstName, lastName, email, age, password },
                    config
                );

                setLoading(false)
                localStorage.setItem("userInfo", JSON.stringify(data));
            } catch (error) {
                setError(error.response.data.message)
                setLoading(false)
            }
        }

    }

    return (
        <MainScreen title='Registrarse'>
            <div className='loginContainer'>
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
