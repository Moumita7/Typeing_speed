import AllRoutes from "./AllRoutes"
import Home from "./Home"


const App = () => {
  return (
    <div>
    {/* <Home/> */}
      <AllRoutes/>
    </div>
  )
}

export default App








// import { Link } from "react-router-dom"
// import AllRoutes from "./AllRoutes"



// const App = () => {
//   return (
//     <div style={{display:"flex", justifyContent:"center", textAlign:"center"}}>
//       <div>
//         <div>
//           <h1>Well come to tuch typeing game</h1>
//         </div>
//         <img style={{width:"40%"}} src="https://cdn.techjockey.com/blog/wp-content/uploads/2019/10/30125341/best-free-typing-software.jpg" alt="" />
//         <div>
//           <h2 >Instructions</h2>
//           <h4>Sit straight and remember to keep your back straight.</h4>
// <h4>Keep your elbows bent at the right angle.</h4>
// <h4>Face the screen with your head slightly tilted forward.</h4>
// <h4>Keep at least 45 - 70 cm of distance between your eyes and the screen.</h4>
// <h4>Еxpose the shoulder, arm, and wrist muscles to the least possible strain.</h4>
//         </div>
//         <button style={{padding:"13px 30px", backgroundColor:"green",textDecoration:"none",borderRadius:"10px",color:"white"}}>
//         <Link to={"/main"}>
//         Start
//         </Link>
//         </button>

//       </div>
//       <AllRoutes/>
//     </div>
//   )
// }

// export default App








// import {  useEffect, useState } from 'react'
// import './App.css'
// import { keyWord } from './Words'


// function App() {
//   let [userInput,setUserInput]=useState('')
//   let [words,setWords]=useState([])
//   let [min,setMin]=useState(0)
//   let [sec,setSec]=useState(0)
//   let [currWordIndex,setCurrWordIndex]=useState(0)

//   let [currCharIndex,setCurrCharIndex]=useState(-1)
//   const [currChar,setCurrChar]=useState("")

//   let [right,setRight]=useState(0)
//   let [wrong,setWrong]=useState(0)

//   // let textInput=useRef(null)
//   // const [status,setStatus]=useState("waiting")
  

//   var timmer;
//   useEffect(()=>{
//     timmer=setInterval(()=>{
// setSec(sec+1)
// if(sec===59){
//   setMin(min+1)
//   setSec(0)
// }

//   },1000)
//   return ()=>clearInterval(timmer)
// })
//   // let key=useRef(keyWord())




// let restart=()=>{
//   setMin(0)
//   setSec(0)
// }

// let stopp=()=>{
//   clearInterval(timmer)
// }


// let charClass=(wordIdx,charIdx,char)=>{
//   if(wordIdx===currWordIndex && charIdx===currCharIndex && currChar){
//     if(char ===currChar){
//       // return `background-color:"green"`
//       // console.log("c",char)
//       // console.log("cu",currChar)



//     }else{
//       // return `background-color:"red"`
    
    

//     }
//   }

// }

//   useEffect(()=>{
// setWords(randomWord)
//   },[])

//   let randomWord=keyWord.split(" ")

// let handleKeyDown=({keyCode,key})=>{
//   // console.log(e.key)
//   if(keyCode===32){
//     checkMatch()
//     setUserInput("")
//     setCurrWordIndex(currWordIndex+1)
//     setCurrCharIndex(-1)
//   }else{
//     setCurrCharIndex(currCharIndex+1)
//     setCurrChar(key)
//   }
// }

// let checkMatch=()=>{
//   const wordToCompare=words[currWordIndex]
//   const doesMatch= wordToCompare==userInput.trim()

//   if(doesMatch){
//     setRight(right+1)
//   }else{
//     setWrong(wrong+1)
//   }

// }




// return (
//   <div  className='main'>

//   <div >

//   <div className='wordBox'>
//     {words.map((element, index) => (
    
//       <>
//       <span style={{border:"1px solid green",margin:"5px"}} key={index} className='word'>
//         {element.split("").map((char,i)=>(
//           <span style={{margin:"5px"}} className={charClass(index,i,char)} key={i}>{char}</span>
          
//         ))}
//         {/* {" "}  */}
      
//       </span>
//       <span> </span>
//       </>
//     ))}
//     </div>
//     <input
//   type='text'
//   placeholder='write text here'
//   value={userInput}
//   onChange={(e)=>setUserInput(e.target.value)}
//   onKeyDown={handleKeyDown}
//   className='inp'
//  />
//  <div>
//  <div>

//  <div style={{display:"flex"}}>
//   <h3 style={{color:"green"}}>Acuracy :</h3>
//   {/* <h3>{NaN ? Math.round((right/(right+wrong))*100):"0"}%</h3> */}
//   <h3 style={{color:"green"}}>{ Math.round((right/(right+wrong))*100)}%</h3>

// </div>

//  </div>

//  {/* <button onClick={start}>Start</button> */}
//  <div style={{display:"flex", justifyContent:"space-between"}}>
//  <button style={{padding:"10px", backgroundColor:"green",textDecoration:"none",borderRadius:"10px",color:"white"}} onClick={restart}>Restart</button>
//  <button style={{padding:"10px", backgroundColor:"green",textDecoration:"none",borderRadius:"10px",color:"white"}}  onClick={stopp}>Stop</button>
//  </div>


//  </div>
//   </div>
//   <div className='timmerDiv'>
//   <div>
//   <h2 >Timmer 5 Min</h2>
//   <div className='timeClk'>
// <div>

//   <h2>{min<10? "0"+min:min}:{sec<10? "0"+sec:sec}</h2>
// </div>
//   </div>

//   </div>


//   </div>

//   </div>
// );
// }

// export default App
