import React from "react";
import { Card ,OverlayTrigger,Popover,Button} from "react-bootstrap";
import './index.css';
import { bookById } from "./data/Books";
import {FcInfo} from 'react-icons/fc'

export function Avatar(props){
    return <img src={props.user.url} alt={props.user.name} width={props.width} />
}

export function TopBar(props){
  return(
    <div className="jumbotron">
     {props.children}
    </div>
  );
}

export function UseCard(props){
  let book = bookById(props.bookId);
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{book[0].title}</Popover.Header>
      <Popover.Body>
       Date : {book[0].date}<br/>
       Rate : {book[0].amount}
      </Popover.Body>
    </Popover>
  );
  return(
    <Card style={props.style} >
      <Card.Img variant="top" src={props.src} style={{width:'100px',margin:'auto'}}/>
      <Card.Body>
        <div className="flex">
        <Card.Title>
          {props.title}          
        </Card.Title>
        <div className="ml-2">
          <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <i className='pointer'><FcInfo/></i>
          </OverlayTrigger>
      </div>
        </div>
        
        <Card.Text>
          {props.content}
        </Card.Text>
      </Card.Body>
    </Card>
    
  );
  }