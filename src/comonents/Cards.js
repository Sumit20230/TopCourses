import React from "react";
import Card from "./Card";
const Cards=({courses})=>{
let allCourses=[];
const getCourses=()=>{
    Object.values(courses).forEach((coursesCateogry)=>{
        coursesCateogry.forEach((course)=>{
            allCourses.push(course);
        })
    })
    return allCourses;
}

return (
    <div>
        {!courses?(<div><p>No data</p></div>):(getCourses().map((courses)=>{
               return <Card key={courses.id} course={courses}/>
            }))};
        

    </div>
)
}
export default Cards;