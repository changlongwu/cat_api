import { useState } from 'react'

import './App.css'
import AnimalCard from './components/AnimalCard';

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  // console.log(ACCESS_KEY)

  const callAPI = async ()=>{
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const json = await response.json();
    console.log(json[0].height)
  }
  return (
    <div className='App'>

      {/* features:
      1/ click a button to create a api fetch
      */}

    {/* history section */}

    {/* the animal card */}

    {/* the barn list */}


    <AnimalCard 
    ACCESS_KEY = {ACCESS_KEY}
    />
    </div>
  )
}

export default App
