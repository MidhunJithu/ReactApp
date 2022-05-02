import React from "react";


class Blogs extends React.Component{

  constructor(props){
    super(props);
    this.state = {loading : true ,data :  []};
    this.loadData = this.loadData.bind(this);
  }
  
  loadData(){
    // fetch('https://rss.art19.com/apology-line',{mode : 'cors',headers:{}})
    // .then(res => { if (res.ok) {
    //     return res;
    //   }
    //   throw new Error('Something went wrong')})
    // .then(
    //     (response) => {
          
    //         // let totalPage = Math.ceil(response.length / this.state.limit);
    //         // let startindex = this.state.page * this.state.limit - 1;
    //         // response = response.slice(startindex, startindex+this.state.limit)
    //         this.setState({data : response,loading : false});
    //     }
    // ).catch((error) => {
    //     console.log(error)
    //   });
}
componentDidMount(){
  this.loadData();
}
  render(){
    return(
      <div className="container-fluid" style={{minHeight : '800px'}}>
        
      </div>
    );
  }
}
  
  export default Blogs;