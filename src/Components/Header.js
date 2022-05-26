import React from 'react';
import '../style.css';
import face from '../images/troll-face.jpg';

export default function Head()
{
    return(
        <nav className='header'>
            <img src={face} className="img"/>
            <h1 className='heading'>Meme Generator</h1>
        </nav>
    )
}