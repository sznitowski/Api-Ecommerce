import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage.js/ErrorMessage";
import MainScreen from "../../components/MainScreen";
import { listUsers } from "../../actions/userActions";
import { Button, Table } from "react-bootstrap";


const UserCrud = () => {
    const dispatch = useDispatch();

    const userList = useSelector((state) => state.userList);
    const { loading, error, users } = userList;

     const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const history = useNavigate()

    useEffect(() => {
        dispatch(listUsers());
        if (!userInfo) {
            history.push("/user")
        }
    }, [
        dispatch, 
        history,
        userInfo,]);
    /* console.log(users) */

    return (
        <div>
            <MainScreen title='Welcome'>

                <Link to="user">

                    <Button
                        type="button"
                        className="me-3 btn btn-primary ml-auto d-block mb-2"
                        data-bs-toggle="modal"
                        data-bs-target="#addModalForm"
                    >
                        add Data
                    </Button>

                </Link>

                <Table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {loading && <Loader />}
                        {error && <ErrorMessage variant='danger'>
                            {error}</ErrorMessage>}
                        {users.map((user =>

                            <tr key={user.id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                            </tr>

                        ))}
                    </tbody>
                </Table>

            </MainScreen >
        </div>
    );
}

export default UserCrud;