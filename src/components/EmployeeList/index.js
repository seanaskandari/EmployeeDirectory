import React from "react";
import SortButton from "../SortButton";

function EmployeeList(props) {
    return (
        <table className="table table-bordered table-hover table-striped mt-5">
            <thead>
                <tr>
                    <th scope="col">Thumbnail</th>
                    <th scope="col">Name <SortButton handleSortBtn={props.handleSortBtn} /> </th>
                    <th scope="col">Phone</th>
                    <th scope="col">Cell</th>
                    <th scope="col">Email</th>
                    <th scope="col">DoB</th>
                </tr>
            </thead>
            <tbody>
            {props.employees.map((obj,index) => (
                    <tr key={index}>
                        <td><img src={obj.img} alt="Employee Thumbnail" /></td>
                        <td>{obj.name}</td>
                        <td>{obj.phone}</td>
                        <td>{obj.cell}</td>
                        <td>{obj.email}</td>
                        <td>{obj.dob}</td>
                    </tr>
            ))}
            </tbody>

        </table>
    )
}

export default EmployeeList;