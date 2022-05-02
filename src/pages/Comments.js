import React from "react";
import { PostCards ,CustomPagination } from "../utilities";

export class Comments extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            loading :true,
            totalPage : 0,
            data : [],
            page : 2,
            limit : 6
        };
        this.changePage =this.changePage.bind(this);
        this.loaddata =this.loaddata.bind(this);
    }

    componentDidMount(){
       this.loaddata();
    }

    loaddata(){
        fetch('https://gorest.co.in/public/v2/posts')
        .then(res => { if (res.ok) {
            return res.json();
          }
          throw new Error('Something went wrong')})
        .then(
            (response) => {
                let totalPage = Math.ceil(response.length / this.state.limit);
                let startindex = this.state.page * this.state.limit - 1;
                response = response.slice(startindex, startindex+this.state.limit)
                this.setState({data : response,totalPage : totalPage ,loading : false});
            }
        ).catch((error) => {
            console.log(error)
          });
    }
    changePage(test){
        console.log('changed')
        this.setState({page : test})
        this.loaddata();
    }

    render(){
        return(
            <>
            {!this.state.loading ?
            (<div className="container">
               {this.state.data.map((data) => (
                <PostCards class='m-5' key={data.id} head = {data.title}  headClass ='text-success' content ={data.body} contentClass='text-dark'/>
                ))}
                <div className="flex justify-content-center">
                <CustomPagination curr ={this.state.page} last={this.state.totalPage} onPageChange={this.changePage}/>
                </div>
            </div>)
            :
            (<div className="container">
                {[1,2,3,4,5].map((data) => (
                <PostCards class='m-5' key={data.toString()} head = 'Loading...'  headClass ='text-success' content = 'Loading....' contentClass='text-dark'/>
                ))}
            </div>)
            }           
            </>
        );
    }
}