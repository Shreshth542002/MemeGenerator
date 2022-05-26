import React, { useState } from 'react';
import memesData from '../memesData';

export default function Meme()
{
    // const [memeImage,setMemeImage] = useState("");
    const [meme,setMeme]= useState(
        {
            toptext:"",
            bottomtext:"",
            randomImage:"http://i.imgflip.com/1bij.jpg"
        }
    )
    const [allMemes,setAllMemes] = useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data =>setAllMemes(data.data.memes))
    },[])

    function handleChange(event)
    {
        const {name,value}=event.target
        setMeme(memeArray => {
            return{
                ...memeArray,
                [name]: value
            }
        })
    }

    function handleSubmit(event)
    {
        event.preventDefault();
    }

    function getMemeImage()
    {
        const randomNumber=Math.floor(Math.random()*allMemes.length);
        const url=allMemes[randomNumber].url
        setMeme(memeArray => {
            return {
            ...memeArray,randomImage : url
            }});
    }

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <input type="text" placeholder='Upper text' name="toptext" value={meme.toptext} 
                onChange={handleChange}/>
                <input type="text" placeholder='Lower text' name="bottomtext" value={meme.bottomtext} 
                onChange={handleChange}/>
            </form>
            <button className="btn" onClick={getMemeImage}>Get a new meme image</button>
            <div className='meme'>
                <img src={meme.randomImage} className="images" />
                <h2 className='meme-text top'>{meme.toptext}</h2>
                <h2 className='meme-text bottom'>{meme.bottomtext}</h2>
            </div>
        </div>
    )
}
