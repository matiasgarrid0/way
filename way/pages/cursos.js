import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import { TextField, Box, Button } from '@mui/material'

const cursos = () => {
  return (
    <div>
      <Navbar/>
      <h1>Cursos</h1>
        <Button type='contained'>Crear Curso</Button>
    </div>
  )
}

export default cursos