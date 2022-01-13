import { useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import "./loginScreen.css";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage.js/ErrorMessage";

const LoginPage = ({ history }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    const submitHandler = async (e) => {
        e.preventDefault()

         try {
            const config = {
                headers: {
                  "Content-type": "application/json",
                },
              };
              console.log(data)
             setLoading(true) 
          
              const { data } = await axios.post(
                "/api/user/login",
                { email, password },
                config
              );

            console.log(data)
            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false)
            
        } catch (error) {
            setError(error.response.data.message)
            setLoading(false)
        }
    }; 

    return <MainScreen title="Iniciar Sesion">

        <div className="loginContainer">

            {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
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
