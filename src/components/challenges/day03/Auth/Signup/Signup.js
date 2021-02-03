import React, { useState } from 'react';

const Signup = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <h2>Signup</h2>
            <input type="text" placeholder="e-mail signup" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="desired password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div> 
    );
}
 
export default Signup;