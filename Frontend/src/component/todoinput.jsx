import React, { useState } from 'react'
import { GoPlusCircle } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

const todoinput = () => {

  const navigate =useNavigate()
  const [input, setInput] = useState('')
  const [task, setTask] = useState(() => {
    return JSON.parse(localStorage.getItem("data")) || ["demo"];
  })



  const submit = () => {
    if (input) {
      setTask([...task, [input]])
      setInput("")
    } else {
      alert("Enter the ToDo")
    }

    localStorage.setItem("data", JSON.stringify([...task, [input]]))
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      submit();
    }
  };

  function remove(deltoindex) {

    let newtask = task.filter((s, index) => {
      return index != deltoindex
    })
    setTask(newtask)
    localStorage.setItem("data", JSON.stringify(newtask))


  }


  const taskedit = (editinput) => {

    let add = task.filter((d, index) => {
      return index === editinput
    })
    if (input == "") {
      setInput(add)
      remove(editinput)
    }


  }

  function handellogout (){
    navigate("/login")
  }


  return (
    <>



      
        <div className='  flex flex-wrap '>
  
            <div className='h-12 w-full flex justify-center items-center'>
              <button onClick={handellogout}>
                logout
              </button>
          <h2 className='text-3xl font-bold m-auto'>TO-DO List</h2>
          </div>
  
          <div className="w-[100vw]" >
            <div className='flex justify-center'>
  
              <p>{input.length}  /  50</p>
              {
                input.length == 50 && <p className=' text-[15px] bg-slate-300 ml-7 text-red-700 '>  you limit are reached </p>
  
              }
            </div>
            <div className='flex justify-center items-center'>
              <input type="search" value={input} className=' border border-black text-black outline-none w-[50%] p-1 rounded-md' maxLength={50} placeholder='Enter your todo' onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} />
              <button className=' ml-3 border border-white py-1 px-4 rounded-xl bg-slate-500' onClick={submit} >Add</button>
            </div>
            { task==0 ?
        (<div className='text-3xl font-bold text-center mt-44'><p className='text-white'> Enter the Data</p></div>)
      :(
  
            <ul className="w-full mx-auto text-center">
              {task.map((item, index) => (
                <li key={index} className="border-b py-2 flex items-center justify-between w-full">
                 
                  <h1 className="text-left mx-3">{`${index + 1} •`}</h1>
  
                 
                  <span className="flex-1 text-center text-wrap mr-3">{item}</span>
  
                  
                  <div className="flex space-x-2 mr-2">
                    <button className="border border-white px-2 bg-slate-500 rounded-md" onClick={() => remove(index)}>Del</button>
                    <button className="border border-white px-2 bg-slate-500 rounded-md" onClick={() => taskedit(index)}>Edit</button>
                  </div>
                </li>
              ))}
            </ul>
      )
            }
  
          </div>
  
        </div>
      

    </>
  )
}

export default todoinput