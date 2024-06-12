
const BanList = ({BanListEle, removeFromBanList}) =>{
    return (
        <div className="BanList-nav">

            <h2>Ban list</h2>
            <h3>Select an attribute in your listing to ban it</h3>

            {BanListEle && BanListEle.map((ele, index) => (
                    
                    <div key={index}>
                        <button  onClick={()=>removeFromBanList(ele)} >{ele}</button>

                    </div>
                
            ))}


        </div>
    )

}

export default BanList;