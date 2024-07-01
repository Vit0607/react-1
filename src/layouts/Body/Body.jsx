import './Body.css';
import { useState } from 'react';

function Body({ children }) {
    return <div className="body">{children}</div>;
}

export default Body;
