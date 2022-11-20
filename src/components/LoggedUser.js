import {useContext} from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import AuthContext from "../contexts/AuthContext";
const LoggedUser = ()=>{
    const {userInfo, logoutUser} = useContext(AuthContext);
    const {lastName, image} = userInfo;
    return (
        <>
            <Box sx={{display: "flex"}}>
                <Avatar alt={lastName}  src={image} />
                <Button onClick={logoutUser} color="inherit">Logout</Button>
            </Box>

        </>
    )
}

export default LoggedUser;