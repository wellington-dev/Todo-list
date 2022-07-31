import { FormEvent, useState, ChangeEvent } from "react"

import { ITask } from "../Interface"
import CardTask from "../CardTask"
import Input from "../Input";

const LIMIT = 999;
const AddArea = ()=>{

    const [task, setTask]= useState('')
    const [todoList, setTodoList]= useState<ITask[]>([])

    const addTask =(e: FormEvent)=>{
        e.preventDefault()
        const idRandom  = (num: number)=> Math.floor(Math.random() * num);
     
       const newTask = {id: idRandom(LIMIT), nameTask:task, done: true}
       setTodoList([...todoList, newTask])
       setTask('')
    }

    const handleChange = (e : ChangeEvent<HTMLInputElement>)=>{
        setTask(e.target.value)
    }

    const deleteTask = (DeleTaskId: number)=>{
        setTodoList(todoList.filter((item)=> item.id !== DeleTaskId))
    }

    const checkTodoList = (id:number)=>{
        const checkTask = todoList.map((items)=>{
            if(items.id === id){
                return {...items, done: !items.done}
            }
            return items
        })
            setTodoList(checkTask)
    }

    return(
        <div>
            <Input handleSubmite={addTask}  handleChange={handleChange} task={task} />
			
                {todoList.map((item)=>(
                    <section key={item.id}>
                        <CardTask checkTodoList={checkTodoList} task={item} deleteTask={deleteTask} />
                    </section>
                ))}

        </div>
    )
}

export default AddArea