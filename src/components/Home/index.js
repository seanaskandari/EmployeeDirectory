import React from "react";
import TopBanner from "../TopBanner/index.js";
import SearchForm from "../SearchForm/index"
import EmployeeList from "../EmployeeList/index"

function Home (props) {
    return(
        <>
            <TopBanner />
            <SearchForm onChange={props.handleInputChange}/>
            <EmployeeList handleSortBtn={props.handleSortBtn} employees={props.employees}/>
        </>
    )
}

export default Home;