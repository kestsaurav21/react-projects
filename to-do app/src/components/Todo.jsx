import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png';
import TodoItems from './TodoItems';

const Todo = () => {

    const inputRef = useRef();
    const [todoList, setTodoList] = useState(localStorage.getItem("todos")? 
    JSON.parse(localStorage.getItem("todos")): []);



    const add = () => {
        const inputText = inputRef.current.value.trim();

        if(inputText ===""){
            return null;
        }

        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false
        }

        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = "";
    }

    const deleteTodo = (id) => {
        setTodoList((prvTodos) => {
            return prvTodos.filter((todo) => todo.id !== id );
        })
    }

    const toggle = (id) => {
        setTodoList((prev) => {
            return prev.map((todo) => {
                if(todo.id === id){
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo;
            })
        })
    } 

    useEffect(()=> {
        localStorage.setItem("todos", JSON.stringify(todoList));
    }, [todoList]);

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md
    flex flex-col p-7 min-h-[550px] rounded-xl'>
        {/* Title  */}
        <div className='flex items-center mt-7 gap-2'>
            <img className='w-8 '
            src={todo_icon} alt="" />
            <h1 className='text-2xl font-semibold'>To-Do List</h1>
        </div>
        {/* Input-Box */}
        <div className='my-5 flex items-center bg-gray-200 rounded-full'>
            <input ref={inputRef}
             className='bg-transparent border-0 outline-none
            flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'
             type="text" placeholder='Add your task' />
             <button onClick={add}
             className='border-none rounded-full bg-orange-600
             text-white w-32 h-14 text-lg font-medium
             cursor-pointer' >Add</button>
        </div>
        {/* task-list */}

        <div>
            {todoList.map((item, index) => {
                return <TodoItems key={index} text={item.text}
                id={item.id} isComplete={item.isComplete}
                deleteTodo = {deleteTodo}
                toggle={toggle}/>
            })}
            {/* <TodoItems text={inputText}/>
            <TodoItems text="Learn React"/> */}

        </div>
    </div>
  )
}

export default Todo