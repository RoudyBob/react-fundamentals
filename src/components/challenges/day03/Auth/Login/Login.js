import React, { useState } from 'react';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="e-mail address" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div> 
    );
}
 
export default Login;