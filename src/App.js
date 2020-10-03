import React, { useState, useEffect } from 'react';
import API from './api/API.js';
import Home from "./components/Home/index"

function App() {
  const [employees, setEmployees] = useState([]);
  const [employeeSearch, setEmployeeSearch] =useState([]);
  const [ascending, setOrderBy] = useState(true)

  useEffect(()=> {
    API.searchEmployees()
    .then(({data})=>{
      let empList = data.results.map(obj => ({
        img: obj.picture.thumbnail, 
        name: `${obj.name.first} ${obj.name.last}`,
        email: obj.email,
        dob: obj.dob.date,
        phone: obj.phone,
        cell: obj.cell,
        asc: true
      }))
      setEmployeeSearch(empList);
      setEmployees(empList);
    })
  },[])

  
  const handleInputChange = (event) => {
    let value = event.target.value
    setEmployeeSearch(
      employees.filter(obj =>{
        if(obj.name.includes(value)) {
          return true;
        }
        else {
          return false;
        }
      })
    )
  }

  const handleSortBtn = () => {
    setOrderBy(!ascending);
    if(ascending) {
      employeeSearch.sort((a, b) => (a.name > b.name) ? 1 : -1)
    }
    else{
      employeeSearch.sort((a, b) => (a.name < b.name) ? 1 : -1)
    }
  }

  return (
    <Home 
      employees={employeeSearch}
      handleInputChange={handleInputChange}
      handleSortBtn={handleSortBtn}
    />
  );
}

export default App;