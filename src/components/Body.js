import React from 'react'
import memeData from '../memeData'

const Body = () => {

  React.useEffect(()=>{
    fetch(`https://api.imgflip.com/get_memes`)
    .then(res => res.json())
    .then(data => setallmemes(data.data.memes) )

  },[])

  const [allmemes , setallmemes] = React.useState([])

  const [meme,setmeme] = React.useState({
    topText: "",
    bottomText:"",
    randomimage:"http://i.imgflip.com/1bij.jpg",
  })

  function getUrl(){
    const random = Math.floor(Math.random() * allmemes.length)
    const url = allmemes[random].url

    setmeme(prevstate => (
      {
        ...prevstate,
        randomimage: url,
      }
    ))
    
  }
  function handleChange(event){
    const {name,value} = event.target
    setmeme(prevdata => ({
      ...prevdata,
      [name]:value
    }))
  }
  return (
    <div className='form-div'>
      <form className='body-form'>
        <input className='box1'  placeholder='Enter the first line' name='topText' value={meme.topText}  onChange={handleChange}></input>
        <input className='box2'  placeholder='Enter the second line' name='bottomText' value={meme.bottomText} onChange={handleChange}></input>
      </form>
      <button className='meme-button' onClick={getUrl}>Generate Meme</button>
      
      <div className='meme'>
      <img src={meme.randomimage} alt='Meme-Img' className='meme-img'/>
      <h2 className='meme-text top'>{meme.topText}</h2>
      <h2 className='meme-text bottom'>{meme.bottomText}</h2>
      </div>
    </div>
  )
}

export default Body
