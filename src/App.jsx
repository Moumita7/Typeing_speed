
import {  useEffect, useState } from 'react'
import './App.css'
import { keyWord } from './Words'


function App() {
  let [userInput,setUserInput]=useState('')
  let [words,setWords]=useState([])
  let [min,setMin]=useState(0)
  let [sec,setSec]=useState(0)
  let [currWordIndex,setCurrWordIndex]=useState(0)

  let [currCharIndex,setCurrCharIndex]=useState(-1)
  const [currChar,setCurrChar]=useState("")

  let [right,setRight]=useState(0)
  let [wrong,setWrong]=useState(0)

  // let textInput=useRef(null)
  // const [status,setStatus]=useState("waiting")
  

  var timmer;
  useEffect(()=>{
    timmer=setInterval(()=>{
setSec(sec+1)
if(sec===59){
  setMin(min+1)
  setSec(0)
}

  },1000)
  return ()=>clearInterval(timmer)
})
  // let key=useRef(keyWord())




let restart=()=>{
  setMin(0)
  setSec(0)
}

let stopp=()=>{
  clearInterval(timmer)
}


let charClass=(wordIdx,charIdx,char)=>{
  if(wordIdx===currWordIndex && charIdx===currCharIndex && currChar){
    if(char ===currChar){
      // return `background-color:"green"`
      console.log("c",char)
      console.log("cu",currChar)

      // return green

    }else{
      // return `background-color:"red"`
      // console.log("cc",char)
      // console.log("ccu",currChar)
      // alert("wrong key")
      // ret

    }
  }

}

  useEffect(()=>{
setWords(randomWord)
  },[])

  let randomWord=keyWord.split(" ")

let handleKeyDown=({keyCode,key})=>{
  // console.log(e.key)
  if(keyCode===32){
    checkMatch()
    setUserInput("")
    setCurrWordIndex(currWordIndex+1)
    setCurrCharIndex(-1)
  }else{
    setCurrCharIndex(currCharIndex+1)
    setCurrChar(key)
  }
}

let checkMatch=()=>{
  const wordToCompare=words[currWordIndex]
  const doesMatch= wordToCompare==userInput.trim()
  // console.log({doesMatch})
  // console.log("doesMatch")
  if(doesMatch){
    setRight(right+1)
  }else{
    setWrong(wrong+1)
  }

}




return (
  <div  className='main'>
  {/* <div style={{border:"2px solid red"}}> */}
  <div >

  <div className='wordBox'>
    {words.map((element, index) => (
    
      <>
      <span style={{border:"1px solid blue",margin:"5px"}} key={index} className='word'>
        {element.split("").map((char,i)=>(
          <span style={{margin:"5px"}} className={charClass(index,i,char)} key={i}>{char}</span>
          
        ))}
        {/* {" "}  */}
      
      </span>
      <span> </span>
      </>
    ))}
    </div>
    <input
  type='text'
  value={userInput}
  onChange={(e)=>setUserInput(e.target.value)}
  onKeyDown={handleKeyDown}
 />
 <div>
 <div>
 {/* <div>
  <h3>Word per minute</h3>
  <h3>{right}</h3>
</div> */}
 <div>
  <h3>Acuracy</h3>
  {/* <h3>{NaN ? Math.round((right/(right+wrong))*100):"0"}%</h3> */}
  <h3>{ Math.round((right/(right+wrong))*100)}%</h3>

</div>

 </div>

 {/* <button onClick={start}>Start</button> */}
 <button onClick={restart}>Restart</button>
 <button onClick={stopp}>Stop</button>

 </div>
  </div>
  <div className='timmerDiv'>
  <div>
  <h2>Timmer Clock</h2>
  <h2>{min<10? "0"+min:min}:{sec<10? "0"+sec:sec}</h2>

  </div>


  </div>

  </div>
);
}

export default App
