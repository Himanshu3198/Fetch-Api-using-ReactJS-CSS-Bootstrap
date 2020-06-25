import React, { Component } from 'react'
// import FormHandling from '../Formhandling'

export default class Password extends Component {
         state={
            Newpassword:"",
            Repassword:"",
            // default:this.state.Defaultpassword,

        }
        handleChangeNewPassword=e=>{
            this.setState({Newpassword:e.target.value})

        }
        handleChangeRePassword=e=>{
            this.setState({Repassword:e.target.value})

        }
        ConfirmSubmit=e=>{
            // const Default_Password=this.state.DefaultPassword;
            e.preventDefault();
            console.log(e.target[0].value,"this is retype password",e.target[1].value)
            if(e.target[0].value===e.target[1].value)
            // { const Default_Password=this.state.Defaultpassword;
                // this.setState({[this.state.Defaultpassword]:e.target[0].value})
                console.log("this is you want"+this.props.defaultpassword)
                this.props.updateDefaultPassword(e.target[0].value)
                // console.log("default pas is",e.target[2].value)
                alert("Password Reset Successfully")
            }
        
    render() {
   
        return (
            <div>
                
                    
                <form onSubmit={this.ConfirmSubmit}>
                    <label>
                        <h1>Reset Password </h1>
                        <input type="password" value={this.state.Newpassword} onChange={this.handleChangeNewPassword} placeholder="New Password">
                        </input>
                    </label>
                  
                    <label>
                        <input type="password" value={this.state.Repassword} onChange={this.handleChangeRePassword} placeholder=" Confirm Password"></input>

                    </label>
 
                    <label>
                        <input type="submit" value="Set Password" id="submit"></input>

                    </label>
           

                </form>
            </div>
        )
    }
}
