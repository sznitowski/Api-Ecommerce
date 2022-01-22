import React, { useState, useEffect } from "react";
import MainScreen from "../../components/MainScreen";
import { makeStyles } from "@material-ui/core/styles";
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    modal: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: "50%",
        left: "50%",
        transform: "translate(-50%; -50%)"
    },
    iconos: {
        cursor: "pointer"
    },
    inputMaterial:{
        width: "100%"
    }
}));

function UserOperations() {

    const styles = useStyles();

    const [users, setUsers] = useState([]);
    const [insertModal, setInsertModal] = useState(false);

    const [selectUser, setSelectUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        age:""
    })

    const handleChange = e =>{
        const{firstName, value} = e.target;
        setSelectUser(prevState => ({
            ...prevState,
                [firstName]: value
        }))
    }

    const baseUrl = "/api/user"

    const fetchUsers = async () => {
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };

        await axios.get(baseUrl, config)
        const { data } = await axios.get('/api/user', config);
        setUsers(data.data)
    }

    const OpenCloseInsertModal=() => {
        setInsertModal(!insertModal)
    }

    useEffect(() => {
        fetchUsers()
    }, []);


    const bodyInsert = (
        <div className={styles.modal}>
            <h3>Edit user info</h3>
            <TextField  className={styles.inputMaterial} label="FirstName"/>
            <br />
            <TextField className={styles.inputMaterial} label="LastName"/>
            <br />
            <TextField className={styles.inputMaterial} label="Email"/>
            <br />
            <TextField className={styles.inputMaterial} label="Age"/>
            <br />
            <div alignt="right">
                <Button>Insertar</Button>
                <Button onClick={OpenCloseInsertModal}>Cancelar</Button>
            </div>

        </div>
    )

    return (
        <MainScreen title="EDIT PROFILE">
            <div className="operations">
                <br />
                <Button onClick={OpenCloseInsertModal}>Insertar</Button>
                <br /><br />
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Firstname</TableCell>
                                <TableCell>Lasttname</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Age</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>

                            {users && users.map(user => (
                                <TableRow>

                                    <TableCell>{user.firstName}</TableCell>
                                    <TableCell>{user.lastName}</TableCell>
                                    <TableCell>{user.age}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                        <Edit />
                                            &nbsp;&nbsp;&nbsp;
                                        <Delete />
                                    </TableCell>
                                </TableRow>
                            )
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Modal
                    open={insertModal}
                    close={OpenCloseInsertModal}
                >    
                {bodyInsert}
                </Modal>

            </div>
        </MainScreen>
    );
};

export default UserOperations;