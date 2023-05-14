import React, { useEffect, useState } from "react";
import Navbar from "./comonents/Navbar";
import { apiUrl,filterData } from "./data";
import Cards from "./comonents/Cards"
import Filter from "./comonents/Filter";
//import { useEffect } from "react";
import { toast } from "react-toastify";

const App = () => {
    const [courses,setCourses]=useState(null);
    useEffect(()=>{
const fetchData= async()=>{
    try{
const res= await fetch(apiUrl);
const data= await res.json();
setCourses(data.data);
    }
    catch(error)
    {

toast.error("something went wrong");
    }
    
}
fetchData();
    },[]);

 return (
<div>
 <Navbar/>
 <Filter filterData={filterData}/>
<Cards courses={courses}/>

</div>
 );
};

export default App;
