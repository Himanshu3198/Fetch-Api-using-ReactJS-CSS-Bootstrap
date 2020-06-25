
import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Page from "./Component/Page"
import Password from "./Component/Password"
// import Posts from "./Component/Posts"

export default class App extends Component {
    state = {
        name: "",
        password: "",
        isLoggedIn: false,
        defaultname: "himanshu",
        defaultpassword:"himanshu123",
        forgotpassword: false,
        Newpassword: "",
        Repassword: "",
    }
    handleChangeName = e => {
        this.setState({ name: e.target.value })



    }
    handleChangePassword = e => {

        this.setState({ password: e.target.value })


    }
    handleChangeNewPassword = e => {
        this.setState({ Newpassword: e.target.value })

    }
    handleChangeRePassword = e => {
        this.setState({ Repassword: e.target.value })

    }



    handleSubmit = e => {
        // const defaultname="himanshu";
        const defaultname = this.state.defaultname;



        const defaultpassword = this.state.defaultpassword;

        // const defaultpassword="abcd1234";
        console.log(e.target[1].value);
        e.preventDefault();
        // if(defaultname===e.target[0].value)
        // { const isLoggedIn=this.state.isLoggedIn;

        // }

        // console.log()
        if (e.target[0].value === defaultname && e.target[1].value === defaultpassword) {
            this.setState({ isLoggedIn: true })
        }
        else {
            return (window.alert("wrong password"))

        }
        console.log(e.target[0].value, "this is retype password", e.target[1].value)
        if (e.target[0].value === e.target[1].value) {
            this.setState({ Default_Password: e.target[0].value })
            window.alert("Password Reset Successfully")
        }

    }
    forgotpass = () => {
        this.setState({ forgotpassword: true })

    }

    updateDefaultPassword = (newPassword) => {
        console.log(newPassword)
        this.setState({ defaultpassword: newPassword, isLoggedIn: false, forgotpassword: false })
        this.setState({ defaultpassword: newPassword })

    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        const forgotpassword = this.state.forgotpassword;




        if (isLoggedIn) {
            return <Page />

        }
        if (forgotpassword) {
            return <Password clickData={this.state.defaultpassword} updateDefaultPassword={this.updateDefaultPassword} />
        }

        return (
            <div>



                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h1>Login </h1>
                        <input type="text" value={this.state.name} onChange={this.handleChangeName} placeholder="username">
                        </input>
                    </label>
                    {/* <br/><br/> */}
                    <label>
                        <input type="password" value={this.state.password} onChange={this.handleChangePassword} placeholder=" Password"></input>

                    </label>
                    {/* <br/><br/> */}
                    {/* <a href="/#" id="link">Forgot Password?</a> */}
                    <label>
                        <input type="submit" value="Login" id="submit"></input>
                        <button id="button" onClick={this.forgotpass}>forgot password?</button>
                    </label>


                </form>
            </div>
        )

    }
}