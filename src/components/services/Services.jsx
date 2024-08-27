import { Data } from "./serviceData";
import { useEffect, useState } from "react";
import './services.css'

function Service() {

  const [data,setData] = useState([]);
  const [collection,setCollection] = useState([]);

  useEffect(()=>{
    setData(Data);
    setCollection([...new Set(Data.map((item)=> item.titile))])
  },[]) 
  
  const gallery_filter = (itemData) =>{
    const filterData = Data.filter((item)=> item.titile === itemData);
    setData(filterData);
  }

  return (
    <div className="App">
      <div className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li><button onClick={()=> setData(Data)}>All</button></li>
            {
              collection.map((item)=> <li><button onClick={()=>{gallery_filter(item)}}>{item}</button></li>)
            }
          </ul>
        </div>
        <div className="galleryContainer">
          {
            data.map((item)=> <div  key={item.id} className="galleryItem"><img src={item.image  } alt="p"/></div> )
          }
        </div>
      </div>
    </div>
  );
}

export default Service;