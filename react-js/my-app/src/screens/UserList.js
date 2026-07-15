import React from 'react'

const UserList =() => {
    let data =[
        {
            name : "pikul",
            email : "pikul@gmail.com",
            rollno : "01"
        },
        {
            name : "satya",
            email : "satya@gmail.com",
            rollno : "02"
        },
        {
            name : "bibhu",
            email : "bibhu@gmail.com",
            rollno : "03"
        },
        {
            name : "sanju",
            email : "sanjugmail.com",
            rollno : "04"
        },
        {
            name : "smbit",
            email : "sambit@gmail.com",
            rollno : "05"
        }
    ]
  return (
    <div>
      {data.map(({name,email,rollno}) =>{
        return(
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
                <p>{rollno}</p>
            </div>
        )
      })}
    </div>
  )
}

export default UserList
