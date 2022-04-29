import React from "react";
import { useParams ,useLocation } from "react-router-dom";
import { searchContact } from "../data/Contacts";
import { Avatar } from "../utilities";
export default function ContactInfo() {
    let location = useLocation();
    let params = useParams();
    let contact = searchContact(parseInt(params.ContactId));
    return (
      <main style={{ padding: "1rem" }}>
          <h3>info</h3>
        <Avatar user={{name:contact.name,url:contact.url}} width="150px"/>
       <p>Contact Id   :{params.ContactId}</p>
       <p>Contact Name :{contact.name}</p>
       <p>Contact Phone : {contact.phone}</p>
       <p>Location : {contact.location}</p>
       <p>url : {location.search}</p>
      </main>
    );
  }