import { useState } from 'react'
import './App.css'
import Input from './components/kit/Input/Input'
import Textarea from './components/kit/Textarea/Textarea'
import Button from './components/kit/Button/Button'
import Task from './components/kit/Task/Task'

function App() {
  const formStyle = {
    display: "flex",
    width: "344px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px"
  }

  const taskContainerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "344px",
    marginTop: "30px",
    gap: "10px"
  }

  return (
    <>
      <form style={formStyle}>
        <Input placeholder="Title"/>
        <Textarea placeholder="Description"/>
        <div style={{width: "100%", display: "flex", justifyContent: "end"}}>
          <Button sx={{}}>Add</Button>
        </div>
      </form>

      <div style={taskContainerStyle}>
        <Task />
        <Task />
      </div>
    </>
  )
}

export default App
