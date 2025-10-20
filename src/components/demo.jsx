import React, { useEffect, useState } from 'react'

const Demo = ({ data }) => {

    const [studentData, setStudentData] = useState("");

    useEffect(() => {
        if(data != ""){
            setStudentData(JSON.parse(data)) // from string into object
        }
    }, [data])

    return (
        <div>
            <ul>
                <li>id: {studentData.id}</li>
                <li>firstName: {studentData.firstName}</li>
                <li>lastName: {studentData.lastName}</li>
                <li>maidenName: {studentData.maidenName}</li>
                <li>age: {studentData.age}</li>
                <li>gender: {studentData.gender}</li>
                <li>email: {studentData.email}</li>
                <li>phone: {studentData.phone}</li>
                <li>username: {studentData.username}</li>
                <li>password: {studentData.password}</li>
                <li>birthDate: {studentData.birthDate}</li>
                <li>image: {studentData.image}</li>
                <li>bloodGroup: {studentData.bloodGroup}</li>
                <li>height: {studentData.height}</li>
                <li>weight: {studentData.weight}</li>
                <li>eyeColor: {studentData.eyeColor}</li>
            </ul>
        </div>
    )
}

export default Demo
