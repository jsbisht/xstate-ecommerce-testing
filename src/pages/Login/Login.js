import React from 'react';
import './Login.scss';
import SignIn from '../../components/organisms/SignIn';
import SignUp from '../../components/organisms/SignUp';

export default function Login() {
    return (
        <div className="login">
            <SignIn />
            <SignUp />
        </div>
    )
}
