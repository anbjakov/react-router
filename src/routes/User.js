import {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import {getSingleUser} from "../api";
import Spinner from "../components/Spinner";
const User =()=>{
    const [user,setUser] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const params = useParams();
    useEffect(()=>{
        getSingleUser(params.userId).then(data=>setUser(data))
        setLoading(false);
    },[])
    return(

        <div className="container">

            {isLoading && <Spinner/>}
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src={user.image} className="avatar img-thumbnail" alt="..."/>
                    </div>
                    <div className="row">{user.firstName} {user.lastName}</div>
                </div>
                <div className="col">
                    <div>Phone {user.phone}</div>
                    <div>Email {user.email}</div>
                    <div>Maiden name {user.maidenName}</div>
                    <div>Age {user.age}</div>
                </div>
                <div className="col">
                    <div>Gender {user.gender}</div>
                    <div>Email {user.email}</div>
                    <div>User Name {user.username}</div>
                    <div>Password {user.password}</div>
                </div>
                <div className="col">
                    <div>Birth date {user.birthDate}</div>
                    <div>Blood group {user.bloodGroup}</div>
                </div>
            </div>

        </div>
    )
}

export default User;