import React from "react";

export class NewContact extends React.Component{
    constructor(props){
        super(props);
        this.state = {name:'',phone:'xxx-xxx-xxxx'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const field = event.target.name;
        this.setState({[field]: event.target.value});
    }
    handleSubmit(event){
        alert("form submitted ");
        if (!this.state.name) return;
        console.log(this.state)
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} >
                <label>Name :
                <input type="text" onChange={this.handleChange} name='name' value={this.state.name}/>
                </label>
                <br></br>
                <label>Phone :
                <input type="text" onChange={this.handleChange} name='phone' value={this.state.phone}/>
                </label><br/><br/>
                <input type="submit" />
            </form>
        );
    }
}