import {useState, useEffect} from 'react';
import {getUsers, API_URL} from "../api";
import {useNavigate} from "react-router-dom";
import Spinner from "../components/Spinner";
const Users = ()=>{
    const [users, setUsers] = useState([]);
    const [isLoaded, setLoaded] = useState(true);
    const navigate = useNavigate();
    useEffect(()=>{
        getUsers().then(({users})=>{
            setUsers(users);
        })
    setLoaded(false);
    },[])
    const handleShowMore = (id)=> () =>{
        navigate(`/users/${id}`)
    }
    return (
        <div>
            {isLoaded && <Spinner/>}
            <table className="table">
                <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Details</th>
                </tr>
                {
                    users.map(({id, firstName, lastName, email, phone})=>(
                            <tr key={id}>
                                <td>
                                    {firstName}
                                </td>
                                <td>
                                    {lastName}
                                </td>
                                <td>
                                    {email}
                                </td>
                                <td>
                                    {phone}
                                </td>
                                <td>
                                    <button type='button' className="btn btn-primary"
                                            onClick={handleShowMore(`${id}`)}>
                                            Show more
                                    </button>
                                </td>
                            </tr>
                        )

                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default Users;