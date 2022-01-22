import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage.js/ErrorMessage";
import MainScreen from "../../components/MainScreen";
import { Button, Table } from "react-bootstrap";
import axios from "axios";


function UserCrud() {


    const [users, setUsers] = useState([])
    const fetchUsers = async () => {
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };
        const { data } = await axios.get('/api/user', config);
        //console.log(data)
        // localStorage.setItem("userInfo", JSON.stringify(data));
        setUsers(data.data)
    }
    useEffect(() => {
        fetchUsers();
    }, [])

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure")){

        }
    }


    return (
        <>
            <MainScreen title='Welcome'>
                <Link to="user">
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
                        {/* {loading && <Loader />}
                        {error && <ErrorMessage variant='danger'>
                            {error}</ErrorMessage>} */}

                        {users && users.map(user => (
                            <>
                                <tr key={user.id}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.age}</td>
                                    <td>{user.email}</td>
                                    <td><Button
                                        variant="success"
                                        className="mx-2"
                                        href={`/user/${user.id}`
                                    }>Edit
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        variant="danger"
                                        className="mx-2"
                                    onClick={() => deleteHandler(user.id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                                    
                            </tr>
                            </>
                    )
                        )}

                </tbody>
            </Table>

        </MainScreen >
        </>
    );

}

export default UserCrud;