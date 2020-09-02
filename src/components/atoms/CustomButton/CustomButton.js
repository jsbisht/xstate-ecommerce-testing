import React from 'react';
import './CustomButton.scss'

export default function CustomButton({ children, isGoogleSignIn, inverted, dataTestId, className, ...otherProps}) {
    return (
        <button 
            data-testid={dataTestId}
            className={`${ inverted ? 'inverted': ''} ${ isGoogleSignIn ? 'google-sign-in': ''} custom-button ${className}`} {...otherProps}>
            { children }
        </button>
    )
}
