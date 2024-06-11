
import { useState } from 'react'
const AnimalCard = ({ACCESS_KEY}) =>{

    console.log(ACCESS_KEY)

    const callAPI = async ()=>{
        while(true){

            const get_id_response = await fetch("https://api.thecatapi.com/v1/images/search");
            const get_id_json = await get_id_response.json();

            let query = 'https://api.thecatapi.com/v1/images/' + get_id_json[0].id;
            const response = await fetch(query);
            const json = await response.json();
            console.log(json)
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
    const [currenImage, setCurrenImage] = useState(null);
    const [currenCatID, setCurrenCatID] = useState(null);
    const [tempCatID, setTempCatID] = useState(null);

    //  cat info
    const [catName, setCatName] = useState(null);
    const [catOrigin, setCatOrigin] = useState(null);

    // history cat
    // catHistory = [{catName: 'name', catOrigin: 'origin', catImage: 'url'},{}]
    const [catHistory, setCatHistory] = useState([])

    return (
        
        <div className="AnimalCard">
            <h3>cat history</h3>

            {catHistory.map((cat, index) => (
                <div key={index}>
                    <p>{cat.catName}</p>
                    <p>{cat.catOrigin}</p>
                    <img src={cat.catImage} alt={cat.catName} />
                </div>
                ))}
            <h2>Trippin' on Cats</h2>
            <h4>Discover cats from your wildest dreams!</h4>
            <h5>😺😸😹😻😼😽🙀😿😾</h5>

            <div className="card-container">
                <h3>{catName}</h3>
                <h3>{catOrigin}</h3>

                <img src={currenImage} alt="" width='500px'/>

                <button className="discover-button" onClick={callAPI}>🔀 Discover!</button>
            </div>

        </div>

    )
}

export default AnimalCard;