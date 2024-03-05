import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import NotFound from "./pages/NotFound.jsx";
import EmployeeList from "./pages/EmployeeList.jsx";
import EmployeeCard from "./pages/EmployeeCard.jsx";
import AddEmployee from "./pages/AddEmployee.jsx";
import EditEmployee from "./pages/EditEmployee.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App () {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<EmployeeList/>}/>
                    <Route path="employeecard" element={<EmployeeCard/>}/>
                    <Route path="*" element={<NotFound/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}
export default App;