import React from 'react'

const Title = ({name,contactNumber,schoolName,collegeName,rollNumber})=> {
  return (
    <>
    <div>
      <div>
        <div>
          <div>
            <h1 style={{fontSize:50,color:"red"}}>{name}</h1>
          </div>
        </div>
      </div>
    </div>
    <h1 style={{fontSize:50,color:"red"}}>{contactNumber}</h1>
    <h1 style={{fontSize:50,color:"red"}}>{schoolName}</h1>
    <h1 style={{fontSize:50,color:"red"}}>{collegeName}</h1>
    <h1 style={{fontSize:50,color:"red"}}>{rollNumber}</h1>
    {/* <h1 style={{backgroundColor:"yellow",color:"red"}}>{demo}</h1>
    <h1>{test}</h1> */}
    </>
  )
}

export default Title
