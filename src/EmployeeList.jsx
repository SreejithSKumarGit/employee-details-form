import React from "react";
import './App.css';
function EmployeeList({data})
{
    return(
        <>
            <table style={{
                borderCollapse:"collapse",
                border:"2px solid black"
            }}>
                <thead >
                    <th>No.</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Martial Status</th>
                </thead>
                <tbody>
            {
                data.map((item)=>(
                    <tr
                    key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.address}</td>
                    <td>{item.department}</td>
                    <td>{item.salary}</td>
                    <td>{item.martialState?"Married":"Bachelor"}</td>
                    </tr>
                ))
            }
                </tbody>
            </table>
        </>
    )
}
export default EmployeeList;