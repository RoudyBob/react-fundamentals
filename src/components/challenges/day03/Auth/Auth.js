import React, { useState } from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';

const Auth = () => {

    const [showLogin, setShowLogin] = useState(true);

    const handleToggle = () => {
        //(showLogin) ? setShowLogin(false): setShowLogin(true);
        setShowLogin(!showLogin);
    };

    return ( 
        <div>
            {(showLogin) ? <Login /> : <Signup />}
            <button onClick={handleToggle}>Click to Toggle</button>
        </div>
    );
}
 
export default Auth;
