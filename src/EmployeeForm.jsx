import React from "react";

function EmployeeForm({getData})
{
    const[formData,setFormdata]=React.useState({
       name:"",
       age:"",
       address:"",
       department:"",
       salary:"",
       martialState:false
    })
    const handleChange=(e)=>
    {
        let{name,value,type,checked}=e.target;

        value=type==="checkbox"?checked:value;

        setFormdata({...formData,[name]:value})
    }
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        console.log(formData);
        fetch(`http://localhost:3001/employeeDetails`,
        {
            method:"POST",
            body:JSON.stringify(formData),
            headers:{"Content-type":"Application/json"}
        })

        getData();
        setFormdata({
        name:"",
        age:"",
        address:"",
        department:"",
        salary:"",
        martialState:true})
    }
    const{name,age,address,department,salary,martialState}=formData;
    return(
        <>
            <form onSubmit={handleSubmit} style={{
                    textAlign:"center"
                }}>

                <label htmlFor="name">Name: </label>
                <input 
                type="text"
                name="name"
                value={name} 
                onChange={handleChange}
                style={{
                    marginLeft:"43px"
                }} />
                <br />
                <label htmlFor="age">Age:  </label>
                <input 
                type="number"
                name="age"
                value={age}
                onChange={handleChange}
                style={{
                    marginLeft:"57px"
                }} />
                <br />
                <label htmlFor="address">Address: </label>
                <input 
                type="text"
                name="address"
                value={address}
                onChange={handleChange}
                style={{
                    marginLeft:"28px"
                }} />
                <br />
                <label htmlFor="department">Department: </label>
                <select 
                name="department"
                value={department}
                onChange={handleChange}
                style={{
                    marginLeft:"0px",
                    width:"177px"
                }} >
                    <option value="sales">Sales</option>
                    <option value="operations">Operations</option>
                </select>
                <br />
                <label htmlFor="salary">Salary: </label>
                <input 
                type="number"
                name="salary"
                value={salary}
                onChange={handleChange}
                style={{
                    marginLeft:"43px"
                }} />
                <br />
                <label htmlFor="martialState">Married ? </label>
                <input 
                type="checkbox"
                name="martialState"
                value={martialState}
                onChange={handleChange}
                style={{
                    marginLeft:"182px",
                    textAlign:"left"
                }} />
                <br />
                <input type="submit" 
                style={{
                   width:"150px",
                   height:"30px",
                   fontWeight:"bold",
                   marginTop:"10px"
                }}/>
            </form>



        </>
    )
}
export default EmployeeForm