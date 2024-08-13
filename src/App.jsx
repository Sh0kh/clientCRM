import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import Login from "./pages/Login"
import EmployeeList from "./components/EmployeeList"
import MyProjects from "./pages/MyProjects"
import MainLayout from "./layouts/MainLayout"
import Contracts from "./pages/Contracts"
import Payments from "./pages/Payments"
import './pages/Media.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout/>} >
          <Route path="login" element={<Login />} />
          <Route  element={<MainLayout/>} >
          <Route index element={<MyProjects/>} />  
          <Route path="/contracts" element={<Contracts/>}/>
          <Route path="/payments" element={<Payments/>}/>
            <Route path="employees" element={<EmployeeList />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
