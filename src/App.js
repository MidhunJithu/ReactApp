import React  ,{ Suspense} from 'react';
import{ Layout} from './pages/Navbar';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import { Comments } from './pages/Comments';
import Contacts from './pages/Contacts';
import ContactInfo from './pages/ContactInfo';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { TopBar } from './utilities';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: props.color,
            style : 'mustang',
            make : 2021
        };
    }
    changeColor = () => {this.setState(
        {color: this.state.color === 'red'? 'blue':'red'});
    }
    render(){
        return(
            <>
            <TopBar>
                <h2 className='centre'>Welcome to Digital Library</h2>
            </TopBar>
            <BrowserRouter>
                <Routes>                    
                    <Route path='/' element={<Layout/>}>
                        <Route path ='/Home' element={<Home/>}></Route>
                        <Route path ='/Comments' element={<Comments/>}></Route>
                        <Route path='Blogs' element={<Blogs/>}></Route>
                        <Route path='Contacts' element={<Contacts/>}>
                            <Route index element={<h3>Select a Contact</h3>}></Route>
                            <Route path=':ContactId' element={<ContactInfo/>}></Route>
                        </Route>
                        <Route path='*' element={<main><p>No INFO FOUND</p></main>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>  
            </>
            
        )
    }
}
export default App;