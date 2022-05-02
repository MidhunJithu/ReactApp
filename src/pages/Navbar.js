import React  from "react";
import { Outlet, Link , NavLink,useLocation} from "react-router-dom";
import  '../index.css';
import {ImBooks} from 'react-icons/im';
import {FaComments,FaBloggerB} from 'react-icons/fa';
import {RiContactsBook2Fill} from 'react-icons/ri';
import {FcHome} from 'react-icons/fc';

const Layout = () => {
    return(
        
        <div>
            <nav className="navbar navbar-expand-sm  navbar-light pt-0 ">
                <Link className="navbar-brand mb-1" to='/'>
                    <span className="p-1"><FcHome/></span>
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item test m-1 p-2">
                        <Link to="/Home" className="link">
                            <span className="mb-1"><ImBooks/></span>
                            <span className="ml-2">BOOKS</span>
                        </Link>
                    </li>
                    <li className="nav-item test m-1 p-2">
                        <Link to="/Comments" className="link">
                            <FaComments/>
                            <span className="ml-2">COMMENTS</span>
                        </Link>
                    </li>
                    <li className="nav-item test m-1 p-2">
                        <Link to="/Blogs" className="link">
                            <FaBloggerB/>
                            <span className="ml-2">BLOGS</span>
                        </Link>
                    </li>
                    <li className="nav-item test m-1 p-2">
                        <Link to="/Contacts" className="link">
                            <RiContactsBook2Fill/>
                            <span className="ml-2">CONTACTS</span>
                        </Link>
                    </li>
                </ul>
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
