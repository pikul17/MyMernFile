import React ,{useState} from 'react'


const HidePassword = () => {

    const [showPassword, setShowPassword] = useState(false)
  return (
    <div style={{textAlign : "center"}}>
      <h2> Password Field</h2>
      <input
      type={showPassword ? "text" : "password"}
      placeholder="Enter Password" 
      />
      <button onClick={() => setShowPassword(prev => !prev)} >
        {showPassword ? 'Hide' : 'Show'}

      </button>
    </div>
  )
}

export default HidePassword
