import React from "react";
import { render } from "react-dom";
import { Header } from "./component/header";
import { Home } from "./component/home";

class App extends React.Component{
    render(){
        return(
            <div className=''>
                
                <Header />
                <Home />
                <h1>Hello!</h1>


            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));