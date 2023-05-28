





import {  useEffect, useState } from 'react'
import { startTypeing, finishTypeing, updatedTypeingKey, checkAccuracy } from './redux/action';

import './App.css'
import { keyWord } from './Words'
import { useDispatch, useSelector } from 'react-redux';

// import { useDispatch, useSelector } from 'react-redux';
// import { startTypeing } from './redux/action';

function TypeingPage() {
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
  const dispatch = useDispatch();
  // const accuracy = useSelector((store) => store.accuracy);
  


  var timmer;
  useEffect(()=>{
    dispatch(startTypeing());

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
      return `greenn`
      // console.log("c",char)
      // console.log("cu",currChar)



    }else{
      return `redd`
    
    

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
  }else if(keyCode===8){
    setCurrCharIndex(currCharIndex-1)
    setCurrChar("")
  }
  else{
    setCurrCharIndex(currCharIndex+1)
    setCurrChar(key)
  }
}

let checkMatch=()=>{
  const wordToCompare=words[currWordIndex]
  const doesMatch= wordToCompare==userInput.trim()

  if(doesMatch){
    setRight(right+1)
  }else{
    setWrong(wrong+1)
  }

}




return (
  <div  className='main'>

  <div >

  <div className='wordBox'>
    {words.map((element, index) => (
    
      <>
      <span style={{border:"1px solid green",margin:"5px"}} key={index} className='word'>
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
  placeholder='write text here'
  value={userInput}
  onChange={(e)=>setUserInput(e.target.value)}
  onKeyDown={handleKeyDown}
  className='inp'
 />
 <div>
 <div>

 <div style={{display:"flex"}}>
  <h3 style={{color:"green"}}>Acuracy :</h3>
  {/* <h1>{accuracy}</h1> */}
  {/* <h3>{NaN ? Math.round((right/(right+wrong))*100):"0"}%</h3> */}
  <h3 style={{color:"green"}}>{ Math.round((right/(right+wrong))*100)}%</h3>

</div>

 </div>

 {/* <button onClick={start}>Start</button> */}
 <div style={{display:"flex", justifyContent:"space-between"}}>
 <button style={{padding:"10px", backgroundColor:"green",textDecoration:"none",borderRadius:"10px",color:"white"}} onClick={restart}>Restart</button>
 <button style={{padding:"10px", backgroundColor:"green",textDecoration:"none",borderRadius:"10px",color:"white"}}  onClick={stopp}>Stop</button>
 </div>


 </div>
  </div>
  <div className='timmerDiv'>
  <div>
  <h2 >Timmer 5 Min</h2>
  <div className='timeClk'>
<div>

  <h2>{min<10? "0"+min:min}:{sec<10? "0"+sec:sec}</h2>
</div>
  </div>

  </div>


  </div>

  </div>
);
}

export default TypeingPage