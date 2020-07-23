import React, { Component } from "react"; 

export default class RegisterLogin extends Component {
  render() {
    return (
     <div className="container">
        <h2>Login</h2>
        <div className="row">
            <form 
                className="col s12" 
                //onSubmit={(e)=>{this.submitForm(e)}}
                >
                <div className="row">
                    <div className="input-field col s12">
                        <input 
                        name="email" 
                        type="email"
                        //value={this.state.email} 
                        //onChange={(e)=>{this.handleChange(e)}} 
                        id="email" 
                        className="validate" />
                        <label htmlFor="email">email</label>
                        <span className="helper-text" data-error="Type a valid email" data-success="Vaild" />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input 
                        name="password" 
                        type="password"
                        //value={this.state.password} 
                        //onChange={(e)=>{this.handleChange(e)}} 
                        id="password" 
                        className="validate" />
                        <label htmlFor="password">Password</label>
                        <span className="helper-text" data-error="Incorrect password" data-success="Vaild" />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <button 
                            className="btn wave-effect blue lighten-2" 
                            type="submit"  
                            //onClick={(e)=>{this.submit}}
                            name="action">
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
     </div>
    );
  }
}