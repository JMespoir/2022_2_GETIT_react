import React from "react";

const students =[
    {
        id : 1,
        name : "babo",
    },
    {
        id : 2,
        name : "jaemin",

    },
    {
        id : 3,
        name : "Jye",
    },
    {
        id : 4,
        name : "hobanu"
    }
];


function AttendacneBook(props){
    return (
        <ul>
            {students.map((student)=>{
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendacneBook;

