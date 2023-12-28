import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {
    let [todoInput,updateInput]= useState('test')
    let [todoList,setTodoList]=useState(
        [
            {
                id:1,
                task:'learn React'
            },
            {
                id:2,
                task:'learn English'
            },
            {
                id:3,
                task:'Learn Java'
            }
        ]);
        let nexId=4
        function addTodo(){
            // alert(todoInput)
            if (todoInput==='') {
                alert("Add Some Task...!")
            }else{
                let newTodos =[
                    ...todoList,
                    {
                        id:nexId++,
                        task:todoInput
                    }
                ]
                setTodoList(newTodos);
                updateInput('')
            }
        }
        function deleteTodo(id){
           let upDatedTodo = todoList.filter(
                (todo)=>{
                    return todo.id!==id
                }
            )
            setTodoList(upDatedTodo)
        }
  return (
    <>
        <div className='container mt-5 w-50'>
            <h3 className='text-center'>Todo App</h3>
            <div className='input-group'>
                <input className='form-control' onChange={(e)=>{
                    let task = e.target.value;
                    updateInput(task)
                }} type='text' value={todoInput}/>
                <button className='btn btn-primary' onClick={
                    ()=>{
                        addTodo()
                    }
                }>Add</button>
            </div>
            <ul className='list-group mt-4'>
                {
                    todoList.map(
                        (todo)=> {
                            return (
                                <li className='list-group-item'>
                                    <p>{todo.task}</p>
                                    <button className='btn' onClick={()=>{
                                        deleteTodo(todo.id)
                                    }}>❌</button>
                                </li>
                            )
                        }
                    )
                }
            </ul>
        </div>
    </>
  )
}

export default Todo