import "./styles.css"
import React ,{useState}  from "react"
export default function App() {

  const [ x ,setX] = useState(true)
  
   


  return (
    <div className="App" >
      <input disabled={x} ></input>
      <button onClick={()=>{
        setX(!x)

      }} >click here</button>
    
    </div>
  );
}
