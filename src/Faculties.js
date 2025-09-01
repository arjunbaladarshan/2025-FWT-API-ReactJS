import React, { useState } from 'react'

function Faculties() {

  const [data,setData] = useState([
    {id:1, subjectName:"FWT",subjectCode:2501203,subjectFaculty:"AVB"},
    {id:2, subjectName:"DS",subjectCode:2501204,subjectFaculty:"PUJ"},
  ]);
  const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties";

  fetch(apiUrl)
  .then(res=>res.json())
  .then(res=>{
    console.log("Data recived");
    setData(res);
  });

  console.log("Something");
  
  const foramtedData = data.map((fac)=>{
    return(<li>{ fac.subjectName } ({fac.subjectFaculty})</li>);
  });

  return (
    <ul>{ foramtedData }</ul>
  )
}

export default Faculties