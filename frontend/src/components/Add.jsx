import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const Add = (props) => {
  var [input, setInput] = useState({ Name: "", Age: "", Dept: "", Sal: "" })
  var navigate = useNavigate()
  var location = useLocation()

  const InputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }

  const AddHandler = (e) => {
    if (location.state !== null)
    {
      axios.put("http://localhost:3005/update/"+location.state.val._id, input).then((response) => {
        // console.log(response.data)
        alert(response.data.message)
      }).catch((error) => {
        console.log(error)
      })
      navigate('/view')
    }
    else {
      axios.post("http://localhost:3005/add", input).then((response) => {
        // console.log(response.data)
        alert(response.data.message)  
      }).catch((error) => {
        console.log(error)
      })
      navigate('/view')
    }
    
  }

  useEffect(() => {
    if (location.state !== null)
    {
      setInput({
        ...input,
        Name: location.state.val.Name,
        Age: location.state.val.Age,
        Dept: location.state.val.Dept,
        Sal: location.state.val.Sal
      })
    }
  }, [])
  

  return (
    <div>
      <Typography variant="h3" >Add Details of Employee</Typography><br /><br />
      <TextField id="filled-basic" label="Enter the name" variant="filled" name="Name" value={input.Name} onChange={InputHandler} /><br /><br />
      <TextField id="filled-basic" label="Enter the age" variant="filled" name="Age" value={input.Age} onChange={InputHandler} /><br /><br />
      <TextField id="filled-basic" label="Enter the department" variant="filled" name="Dept" value={input.Dept} onChange={InputHandler} /><br /><br />
      <TextField id="filled-basic" label="Enter the salary" variant="filled" name="Sal" value={input.Sal} onChange={InputHandler} /><br /><br />
      <Button variant="contained" color='error' onClick={AddHandler} >&nbsp;Add&nbsp;</Button>
    </div>
  )
}

export default Add