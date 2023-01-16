import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState('#123455')
  const [error, setError] = useState(false)
  const [current, setCurrent] = useState('#123455')


  //Determines if the input is a valid hex code
  const handleSubmit = (e) => {
    e.preventDefault()
    var reg=/^#([0-9a-f]{3}){1,2}$/i;
    if(reg.test(color)){
      changeStyle()
       setCurrent(color)
     }
     else{
       setError(true)
       console.log(error)
     }
  }
  //randomly generates a hex value
  const rand = () => {
    let val = Math.floor(Math.random()*16777215).toString(16)
    while(val.length < 6){
      val = Math.floor(Math.random()*16777215).toString(16)
    }
    let col = "#" + val
    setColor(col)
  }
  //changes background colour, and resets textbox
  function changeStyle(){
    var element = document.getElementById('colour');
    element.style.backgroundColor = color
    element = document.getElementById('input')
    element.value = ''
    element.placeholder=color
}
  //layout of the app
  return (
    <section>
      <div id = 'topDiv'>
        <h1>Colour Generator</h1>
        <form onSubmit={handleSubmit}>
          <input id = 'input'
            type='text'
            onChange={(e) => setColor(e.target.value)}
            placeholder={color}
          />
          <button id='submit' className='btn' type='submit'>
            Submit
          </button>
          <button onClick={rand}className='btn' type='random'>Randomize</button>
        </form>
      </div>
      <div id='colour'>
      <p id='p'>{current}</p>
      <div id='divButton'><button className='btn'id='copy' onClick={() => navigator.clipboard.writeText(color)}>Copy to clipboard</button></div>
      </div>
     </section>

  )
}

export default App
