import { Route, Routes } from "react-router-dom"
import TypeingPage from "./TypeingPage"
import Home from "./Home"


const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home/>} />
            <Route path="/main" element={<TypeingPage/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes







