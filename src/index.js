import React from 'react';
import ReactDOM from 'react-dom';
import Head from './Components/Header';
import Meme from './Components/Meme';

export default function List()
{
  return(
    <div>
      <Head />
      <Meme />
    </div>
  )
}
ReactDOM.render(<List />,document.getElementById('root'));  