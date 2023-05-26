
import {  useEffect, useState } from 'react'
import './App.css'

// let keyWord=()=> `asdfjkl;`.split(" ").sort(()=>Math.random()>0.5 ? 1: -1)
// let keyWord=()=> `asdfjkl;  asdfjkl; asdfjkl;`

// let keyWord=
//   "asdfjkl; ,asdfjkd;s ,asddewfdwfjkl;"
let keyWord="asdfjkl; , ;lkjfdsa , fdsajkl;, asdfjkl;, asdfjkl;, asdfjkl;, asdfjkl;, asdfjk;l ,asdf jk;,lasdfjkl; ,fdldska;,fjfkdls;,alskdfj aaassss,ddddffffjj,jkklll;;;;lkj, jkl;as"
function App() {
  let [userInput,setUserInput]=useState('')
  let [words,setWords]=useState([])

  // let key=useRef(keyWord())

  useEffect(()=>{
setWords(randomWord)
  },[])

  let randomWord=keyWord.split(",")
// console.log(keyWord.split(","))
//   return (
//     <>
//       <div>


// <div className='container'>
// {/* {words.map((word,index)=>{
//     return (
//       <>
//       <div key={index}>

//         {word}{index !== words.length - 1 && ' '}
 
//         <p> </p>
//         </div>
//       </>
//     )

//   })} */}


// </div>

//  <input
//   type='text'
//   value={userInput}
//   onChange={(e)=>setUserInput(e.target.value)}
//  />
//       </div>
//     </>
//   )

return (
  <div  className='main'>
  {/* <div style={{border:"2px solid red"}}> */}
  <div >

  <div className='wordBox'>
    {words.map((element, index) => (
      <span key={index} className='word'>
        {element}{' '}
      </span>
    ))}
    </div>
    <input
  type='text'
  value={userInput}
  onChange={(e)=>setUserInput(e.target.value)}
 />
 <div>

 <button>Start</button>
 <button>Restart</button>
 </div>
  </div>
  <div className='timmerDiv'>
  <div>
  <h2>Timmer Clock</h2>
  <h2>5</h2>

  </div>


  </div>

  </div>
);
}

export default App
