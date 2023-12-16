import phrases from './utils/phrases.json'
import {useState} from 'react'
import getRandomFromArr from './services/getRandomFromArr'
import Button from './components/Button'
import Phrase from './components/Phrase'
import './App.css'
import arrPhotos from './utils/photos.json'

function App() {

  const initialPhrase = getRandomFromArr(phrases)
  const initialPhoto = getRandomFromArr(arrPhotos)

  const [quoteRandom, setQuoteRandom] = useState( initialPhrase)
  const [photoRandom, setPhotoRandom] = useState( initialPhoto)

  const objStyle = {
    backgroundImage: `url(/fondo${photoRandom}.jpg)`
  }

  return (
    <div style={objStyle} className='app'>
      <h1 className='app__title'>Galleta de la fortuna</h1>
      <article className='app__card'>
        <Phrase 
        quoteRandom={quoteRandom} 
        />
        <Button 
        setQuoteRandom={setQuoteRandom}
        setPhotoRandom={setPhotoRandom} 
        />
      </article>
    </div>
  )
}

export default App
