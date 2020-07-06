import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Button,Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

import { GoogleLogin } from 'react-google-login';


function HeaderButton({googleLogin, googleLogout, propIsLogged, propUser}) {
  
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const account = () => setDropdownOpen(!dropdownOpen);
    const userName = (propUser) ? propUser.name : "";
    console.log(propUser);
    if(propIsLogged) {
        return (
            <div>
                <Dropdown isOpen={dropdownOpen} toggle={account}>
                    <DropdownToggle caret color="primary">
                    { userName } <i className="lni lni-google" /> 
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>My Account</DropdownItem>
                        <DropdownItem>Profile <i className="lni lni-user" /></DropdownItem>
                        <DropdownItem>Setting <i className="lni lni-cog" /></DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={googleLogout}>
                            Logout <i className="lni lni-lock" />
                        </DropdownItem>
                            
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
    else {
        return (
            <div>
                <GoogleLogin
                    clientId="1033155606199-d4vcfo3gs30brur67pq253haf75dv34i.apps.googleusercontent.com"
                    render={renderProps => (
                    <Button color="primary" onClick={renderProps.onClick}>
                        Login using Google <i className="lni lni-google" />
                    </Button>
                    )}
                    onSuccess={googleLogin}
                    onFailure={googleLogin}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        );
    }
    
}

HeaderButton.propTypes = {
    googleLogin: PropTypes.func,
    googleLogout: PropTypes.func,
    isLogged: PropTypes.bool,
    userName: PropTypes.string,
};


  export default HeaderButton;
