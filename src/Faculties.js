import React, { useState, useEffect } from 'react'

function Faculties() {

  const [data,setData] = useState([
    {id:1, subjectName:"FWT",subjectCode:2501203,subjectFaculty:"AVB"},
    {id:2, subjectName:"DS",subjectCode:2501204,subjectFaculty:"PUJ"},
  ]);

  const [isUpdate, setIsUpdate] = useState(true);

  const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties";

  
  useEffect(()=>{
    fetch(apiUrl)
    .then(res=>res.json())
    .then(res=>setData(res));
  },[isUpdate]);

  
  
  const foramtedData = data.map((fac)=>{
    return(
      <>
        <div class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv">
          <div class="item">
            <a href="property-details.html"><img src="assets/images/property-01.jpg" alt="" /></a>
            <span class="category">Luxury Villa</span>
            <h4><a href="property-details.html">{fac.subjectName}</a></h4>
            <ul>
              <li>Subject Code: <span>{fac.subjectCode}</span></li>
              <li>Subject Faculty: <span>{fac.subjectFaculty}</span></li>
            </ul>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div class="section properties">
        <div class="container">
          <ul class="properties-filter">
            <li>
              <a class="is_active" href="#!" data-filter="*">Show All</a>
            </li>
            <li>
              <a href="#!" data-filter=".adv">Apartment</a>
            </li>
            <li>
              <a href="#!" data-filter=".str">Villa House</a>
            </li>
            <li>
              <a href="#!" data-filter=".rac">Penthouse</a>
            </li>
          </ul>
          <div className='row'>
            <div className='col'>
              <button onClick={()=>{
                setIsUpdate(!isUpdate);
              }} className='btn btn-info'>Refresh</button>
            </div>
          </div>
          <div class="row properties-box">
            { foramtedData }
          </div>
          <div class="row">
            <div class="col-lg-12">
              <ul class="pagination">
                <li><a href="#">1</a></li>
                <li><a class="is_active" href="#">2</a></li>
                <li><a href="#">3</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faculties