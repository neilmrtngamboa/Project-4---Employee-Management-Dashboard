import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import NotFound from "./pages/NotFound.jsx";
import EmployeeList from "./pages/EmployeeList.jsx";
import EmployeeCard from "./pages/EmployeeCard.jsx";
import Home from "./pages/Home.jsx";
import AddEmployee from "./pages/AddEmployee.jsx";
import EditEmployee from "./pages/EditEmployee.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './pages/Style/Layout.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from "./pages/Authentication/Login.jsx";
import Register from "./pages/Authentication/Register.jsx";



function App () {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="employeelist" element={<EmployeeList/>}/>
                    <Route path="employeecard" element={<EmployeeCard/>}/>
                    <Route path="addemployee" element={<AddEmployee/>}/>
                    <Route path="editemployee" element={<EditEmployee/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="*" element={<NotFound/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}
export default App;