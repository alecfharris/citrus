import React, { Component } from "react";

class FacebookLogin extends Component{

    render(){
        return(<div className="fb-login-button" data-size="medium" data-button-type="login_with" data-auto-logout-link="false" data-use-continue-as="false"></div>
        );
    }
}

export default FacebookLogin;