import {NavLink} from "react-router-dom";
const Header = ()=>{
    return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
                <a className="navbar-brand" href="#">
                    TRIPMA
                </a>
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            end
                            to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            end
                            to="users">Users</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            end
                            to="hotels">Hotels</NavLink>
                    </li>
                </ul>
            </nav>
    )
}

export default Header;