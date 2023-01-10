import React from 'react'

const Todolist=({todos,setTodos,setEditTodo})=> {

    const CompletedTodo=(todo)=>{
        setTodos(
            todos.map((item)=>{
                if(item.id===todo.id){
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        )
    }
    const EditTodo=({id})=>{
        const findTodo=todos.find((todo)=>todo.id===id);
        setEditTodo(findTodo)
    }
    const DeleteTodo=({id})=>{
        setTodos(todos.filter((todo)=>todo.id !==id))
    }
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button className="button-complete task-button" onClick={()=>CompletedTodo(todo)}>
              <i class="fa-solid fa-circle-check"></i>{" "}
            </button>
            <button className="button-edit task-button" onClick={()=>EditTodo(todo)}>
              <i class="fa-solid fa-pen-to-square"></i>{" "}
            </button>
            <button className="button-delete task-button" onClick={()=>DeleteTodo(todo)}>
              <i class="fa-solid fa-trash-can"></i>{" "}
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}

export default Todolist
