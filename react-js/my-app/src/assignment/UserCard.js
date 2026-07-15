import React from 'react'

const UserCard = ({name,age,city}) => {
    const styles ={
        card :{
            border : "1px solid black",
            borderRadius : "10px",
            backgroundColor : "blue",
            color : "red"
            
            
        }
            
    }
  return (
    <div style={styles.card}>
      <h1>USER DETAIL</h1>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>city : {city}</p>
    </div>
  )
}

export default UserCard
