import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
    const [user, setuser] = useState([])
    var navigate = useNavigate() 

    useEffect(() => {
        axios.get("http://localhost:3005/view").then((response) => {
            setuser(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    const delvalue = (id) => {
        console.log(id)
        axios.delete("http://localhost:3005/remove/" + id)
            .then((res) => {
                alert(res.data.message)
                window.location.reload()
            })
            .catch((error) => { console.log(error) })
    }

    const updateval = (val) => {
        console.log(val)
        navigate('/add',{state:{val}})
    }

    return (
        <div>

            <Typography variant="h3" sx={{ paddingTop: '40px' }}>Employee Details</Typography><br />
            <Paper>
            <TableContainer >
                <Table>
                    <TableHead >
                        <TableRow >
                            <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Age</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Department</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Salary</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Delete</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Update</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((val) => {
                            return (
                                <TableRow key={val._id}>
                                    <TableCell>{val.Name}</TableCell>
                                    <TableCell>{val.Age}</TableCell>
                                    <TableCell>{val.Dept}</TableCell>
                                    <TableCell>{val.Sal}</TableCell>
                                    <TableCell><Button variant='contained' onClick={() => { delvalue(val._id) }} color="error">Delete</Button></TableCell>
                                    <TableCell><Button variant='contained' onClick={() => { updateval(val) }} color='error'>Update</Button></TableCell>
                                </TableRow>
                            )
                        })}

                    </TableBody>
                </Table>
                </TableContainer>
                </Paper>
        </div>
    )
}

export default View