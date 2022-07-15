import { useState } from "react";
import { data } from "./data";
import { dataOne } from "./dataOne";
import './App.css';



function App() {

  const [objects, setObjects] = useState(data);
  const [showText,setShowText] = useState(false);
  const [picture, setPicture] = useState (0);

  const {name, description, imageOne} = dataOne[picture];


  const previosPicture =() => {
    setPicture ((picture => {
      picture --;
      if(picture < 0) {
        return dataOne.length-1;
      }
      return picture;
    }))

  }

  const nextPicture = () => {
    setPicture((picture => {
      picture ++;
      if(picture > dataOne.length-1) {
        picture= 0;
      }
        return picture;
    
    }))
  }


  const removeObject=(id) => {
  let newObjects= objects.filter((object) => object.id!== id);
  setObjects(newObjects)
}
  const showTextClick = (item) => {
  item.showMore =!item.showMore
  setShowText(!showText)
}
  return (<div className="bridge">
    <div className="container">
    <h1>НАШИ ОБЪЕКТЫ</h1>
    </div>

{objects.map((item => {
  const {id, object, description, image, showMore} = item;

  return(
    <div key={id}>
      <div className="container">
        <h2>{id} - {object}</h2>
      </div>
<div className="container">
  <p>{showMore? description: description.substring(0,40)+"..."}<button className= "btnOne" onClick={()=> showTextClick(item)}>{showMore? "Скрыть": "Далее"}</button>
  </p>
</div>
    <div className="container">
      <img src={image} width="400px"  height="350px" alt = "objects"/>
    </div>
    <div className="container">
    <img src= {imageOne} width ="400px"  height="350px" alt ="objectOne"/>
    </div>
  
    <div className=" container">
  <button className ="btnOne" onClick={previosPicture}>Назад</button>
  <button  className ="btnOne" onClick={nextPicture}>Следующая</button>
  <button className="btnOne" onClick={() => removeObject(id)}>Закрыть</button>
  </div>

    </div>)

}))}

<div className="container">
  <button className ="btn" onClick = {() => setObjects([])}>Закрыть все объекты</button>
</div>
</div>


  )
}

export default App;
