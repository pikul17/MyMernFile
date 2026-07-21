import React ,{useState} from 'react'

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);
  return (
    <div>
        <h2>status : { isOn ? "ON" : "OFF"}</h2>
        <button onClick={()=> setIsOn(!isOn)}>
            {isOn ? 'Turn OFF' : 'Turn ON'}
        </button>
      
    </div>
  )
}

export default Toggle
