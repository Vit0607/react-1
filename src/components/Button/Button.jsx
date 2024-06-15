import './Button.css';
import { useState } from 'react';

function Button() {
    const [text, setText] = useState('Сохранить');

    const clicked = () => {
        setText(t => t + '!');
        console.log('Привет');
    };

    return (
        <button onClick={clicked} on className="button accent">
            {text}
        </button>
    );
}

export default Button;
