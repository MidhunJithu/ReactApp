import React  from "react";
import { Outlet, Link , NavLink,useLocation} from "react-router-dom";
import  '../index.css';

const Layout = () => {
    return(
        <div>
            <nav className="headerBar">
                <Link to="/Home">Top Books</Link>|{" "}
                <Link to="/Blogs">Blogs</Link>|{" "}
                <Link to="/Contacts">Contacts</Link>
            </nav>
        <Outlet />
    </div>
    )
}

function QueryNavLink({to,...props}){
    let location = useLocation();
    return <NavLink to={ to + location.search} {...props}/>;
}

export {Layout , QueryNavLink};
