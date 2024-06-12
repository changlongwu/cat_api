import { useState } from 'react'

import './App.css'
import AnimalCard from './components/AnimalCard';
import CatHistory from './components/CatHistory';
import BanList from './components/BanList';

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  // console.log(ACCESS_KEY)

  const callAPI = async ()=>{
    while(true){
        // get id of the cat
        const get_id_response = await fetch("https://api.thecatapi.com/v1/images/search");
        const get_id_json = await get_id_response.json();

        // get the json form the api
        let query = 'https://api.thecatapi.com/v1/images/' + get_id_json[0].id;
        const response = await fetch(query);
        const json = await response.json();

        if (json.hasOwnProperty('breeds')){
            console.log('breeds')
            setCurrenImage(get_id_json[0].url);
            console.log(json.breeds[0])
            if (json.breeds[0].name){
                setCatName(json.breeds[0].name);
            }
            if (json.breeds[0].origin){
                setCatOrigin(json.breeds[0].origin);
            }
            setCatHistory([...catHistory, {'catName': json.breeds[0].name, 'catOrigin': json.breeds[0].origin, 'catImage': get_id_json[0].url}])

            break;
        }
        else{
            console.log('no breeds');
            continue;
        }
    }
  }

  const addToBanList =(ele)=>{
    setBanListEle([...BanListEle, ele])
    console.log('addToBanList')
    console.log(BanListEle)
    
  }
  const removeFromBanList = (ele)=>{
    setBanListEle(BanListEle.filter((item)=>item!==ele))
  }

  const [currenImage, setCurrenImage] = useState(null);
  const [currenCatID, setCurrenCatID] = useState(null);
  const [tempCatID, setTempCatID] = useState(null);

  const [BanListEle, setBanListEle] = useState([]);

  //  cat info
  const [catName, setCatName] = useState(null);
  const [catOrigin, setCatOrigin] = useState(null);

  // history cat
  // catHistory = [{catName: 'name', catOrigin: 'origin', catImage: 'url'},{}]
  const [catHistory, setCatHistory] = useState([])



  return (
    <div className='App'>

      {/* features:
      1/ click a button to create a api fetch
      */}





    {/* the barn list */}
    <BanList 
    BanListEle={BanListEle}
    removeFromBanList = {removeFromBanList}
    />


    {/* history section */}
    <CatHistory 
    catHistory={catHistory}
    />


    {/* the animal card */}
    <AnimalCard 
    ACCESS_KEY = {ACCESS_KEY}
    callAPI={callAPI}
    catName = {catName}
    catOrigin = {catOrigin}
    currenImage = {currenImage}
    addToBanList = {addToBanList}
    />


    </div>

  )
}

export default App
