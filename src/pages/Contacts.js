import React from "react";
import { getContact } from "../data/Contacts";
import { Outlet ,useSearchParams} from "react-router-dom";
import { QueryNavLink } from "./Navbar";

const Contacts = () => {
        let contact = getContact();
        let [searchParams, setSearchParams] = useSearchParams();
        // let filter = 'hello';
        // setSearchParams({filter});
    return (
        <div style={{ display: "flex" }}>
        <nav
            style={{
            borderRight: "solid 1px",
            padding: "1rem",
            }}
        >
            
        <input value={searchParams.get("filter") || ''} onChange = {(e) =>{
            let filter = e.target.value;
            setSearchParams({filter}); 
            }} placeholder="search contacts"/>
        <h1>Contact us</h1>
            {contact.filter((cnt) => {
                let filter = searchParams.get("filter");
                if (!filter) return true;
                let name = cnt.name.toLowerCase();
                return (name.startsWith(filter.toLowerCase()))
            }).map((cnt) =>(
                // <QueryNavLink {style={
                //     ({isActive}) => {return {display : 'block', margin:"1rem 0", color: isActive ? 'red' : ''}}}
                //     key = {cnt.id} to={`/Contacts/${cnt.id}`}/>
                <QueryNavLink style={
                    ({isActive}) => {return {display : 'block', margin:"1rem 0", color: isActive ? 'red' : ''}}}
                    key = {cnt.id} to={`/Contacts/${cnt.id}`}  >{cnt.name} </QueryNavLink>
            ))}
        </nav> <Outlet/>
        </div>
        
       

    )
}
export default Contacts;