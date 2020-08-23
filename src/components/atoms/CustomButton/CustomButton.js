import React from 'react';
import './CustomButton.scss'

export default function CustomButton({ children, isGoogleSignIn, inverted, dataTestId, ...otherProps}) {
    return (
        <button 
            data-testid={dataTestId}
            className={`${ inverted ? 'inverted': ''} ${ isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
            { children }
        </button>
    )
}