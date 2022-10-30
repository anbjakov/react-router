import {Outlet} from "react-router-dom";
import Header from "../components/Header";
const Root = ()=> {
    return (
        <div className="container">
            <Header/>
            <Outlet/>
        </div>
    )
}

export default Root;