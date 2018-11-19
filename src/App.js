import React,{Component} from "react";
import {
    BrowserRouter,
    Route
} from "react-router-dom";
import Header from "./common/header";
import {Provider} from "react-redux";
import Home from "./pages/home"
import Detail from "./pages/detail"
import Login from "./pages/login"
import store from "./store/index";

export default class App extends Component{
    render(){
        return (
            <Provider store={store}>
                <div>
                    <BrowserRouter>
                        <div>
                            <Header/>
                            <Route exact path = "/" component = { Home }></Route>
                            <Route exact path = "/detail/:id" component = { Detail }></Route>
                            <Route path='/login' exact component={Login}></Route>
                        </div>
                    </BrowserRouter>
                </div>
            </Provider>
        )
    }
}