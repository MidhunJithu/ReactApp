import React ,{useContext} from "react";
import { Card ,OverlayTrigger,Popover,Button,Pagination} from "react-bootstrap";
import './index.css';
import { bookById } from "./data/Books";
import {FcInfo} from 'react-icons/fc';
import ThemeContext from "./contexts";

export function Avatar(props){
    return <img src={props.user.url} alt={props.user.name} width={props.width} />
}

export function TopBar(props){
  return(
    <div className="titleBar">
     {props.children}
    </div>
  );
}

export function UseCard(props){
     let book = bookById(props.bookId);
     const theme = useContext(ThemeContext);

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
    <Card style={props.style} className = {theme}>
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
export function PostCards(props){

  return(
    <Card className={props.class}>
    {props.head ? <Card.Header className={props.headClass}>{props.head}</Card.Header> : ''}
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text className={props.contentClass}>
        {props.content}
      </Card.Text>
       {props.btn ? <Button variant="primary">Go somewhere</Button> :'' }
    </Card.Body>
  </Card>
  );
}

export function CustomPagination(props){

  function handlePage(e){
    props.onPageChange(e.target.attributes.getNamedItem("data-id").value);
  }
  return(
    

    <Pagination>
      <Pagination.First  onClick={handlePage} data-id='1'/>
      <Pagination.Prev onClick={handlePage} data-id={parseInt(props.curr)-1}/>
        {props.total > 4 && props.curr != 2 ? <Pagination.Item>{1}</Pagination.Item> : ''}
      <Pagination.Ellipsis />

      <Pagination.Item onClick={handlePage} data-id={parseInt(props.curr)-1}>{parseInt(props.curr)-1}</Pagination.Item>
      <Pagination.Item active onClick={handlePage} data-id={parseInt(props.curr)}> {parseInt(props.curr)}</Pagination.Item>
      <Pagination.Item onClick={handlePage} data-id={parseInt(props.curr)+1}>{parseInt(props.curr) +1}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Next onClick={handlePage} data-id={parseInt(props.curr)+1}/>
      <Pagination.Last onClick={handlePage} data-id={props.last}/>
    </Pagination> 
  );
}
class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <span src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} >test</span>
    );
  }
}

class MouseWithCat extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

        {/*
          We could just swap out the <p> for a <Cat> here ... but then
          we would need to create a separate <MouseWithSomethingElse>
          component every time we need to use it, so <MouseWithCat>
          isn't really reusable yet.
        */}
        <Cat mouse={this.state} />
      </div>
    );
  }
}

export class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <MouseWithCat />
      </div>
    );
  }
}