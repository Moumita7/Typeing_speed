import { Link } from "react-router-dom"
// import AllRoutes from "./AllRoutes"



const Home = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", textAlign:"center"}}>
      <div>
        <div>
          <h1>Well come to tuch typeing game</h1>
        </div>
        <img style={{width:"40%"}} src="https://cdn.techjockey.com/blog/wp-content/uploads/2019/10/30125341/best-free-typing-software.jpg" alt="" />
        <div>
          <h2 >Instructions</h2>
          <h4>Sit straight and remember to keep your back straight.</h4>
<h4>Keep your elbows bent at the right angle.</h4>
<h4>Face the screen with your head slightly tilted forward.</h4>
<h4>Keep at least 45 - 70 cm of distance between your eyes and the screen.</h4>
<h4>Еxpose the shoulder, arm, and wrist muscles to the least possible strain.</h4>
        </div>
        <button style={{padding:"13px 30px", backgroundColor:"green",textDecoration:"none",borderRadius:"10px",color:"white"}}>
        <Link to={"/main"}>
        Start
        </Link>
        </button>

      </div>
      {/* <AllRoutes/> */}
    </div>
  )
}

export default Home
