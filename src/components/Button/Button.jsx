import './Button.css';
import { useState } from 'react';

function Button({ text, onClick }) {
    return (
        <button on className="button accent" onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
