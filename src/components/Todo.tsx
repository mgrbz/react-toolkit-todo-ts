
import React, { useState } from 'react'
import { addTodo, removeTodo, changeTodoComplate } from '../fetures/todoSlice';
import { useAppDispatch, useAppSelector } from '../store';

const Todo = () => {

  const [title, setTitle] = useState('')
  const dispatch = useAppDispatch();
  const todos = useAppSelector(state => state.todos);

  const onSubmitForm = (event: any) => {
    event.preventDefault();
    //dispatch işlemi
    dispatch(addTodo(title))
    console.log('title',title)
    setTitle('')
  }

  const onRemoveTodo = (todoId: string) => {
    dispatch(removeTodo(todoId));
  }

  const onChangeTodoComplate = (todoId: string) => {
    dispatch(changeTodoComplate(todoId));
  }

  return (
    <React.Fragment>
      <div>
        Todo App
        <form onSubmit={(e) => onSubmitForm(e)}>
          <input style={{ borderColor: 'black' }} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </form>
        <div>
          <ul>
            {
              todos.map(todo => (
                <div>
                  <span onClick={() => onChangeTodoComplate(todo.id)}>
                    {todo.title} - {todo.complated ? 'Complated  ': 'In progress  '} 

                  </span>
                  <span onClick={() => onRemoveTodo(todo.id)}>Remove</span>

                </div>
              ))
            }
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Todo

