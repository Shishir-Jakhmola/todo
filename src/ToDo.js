import { useState, useRef } from 'react';
import { TasksListComponent } from './TaskList'
import './ToDo.css';

function ToDo() {
  let [TasksStateVar, TaskUpdater] = useState([])
  let TaskTitle = useRef();
  return (
    <div className="todo">

      <h1>ToDo App</h1>

      <form id="ToDoForm" onSubmit={(e) => {
        e.preventDefault();
        // TasksStateVar.push({
        //   Id: TasksStateVar.length,
        //   TaskTitle: TaskTitle.current.value
        // });
        console.log(TasksStateVar);
        TaskUpdater(
          [
          ...TasksStateVar,
          {
          Id: TasksStateVar.length,
          TaskTitle: TaskTitle.current.value
        }
      ]
        );
        TaskTitle.current.value = "";
        }}>
        <label htmlFor="title">Task Title </label>
        <input type="text" id="title" ref={TaskTitle}></input>
        <input type="submit"></input>
      </form>

      <ol>
      <TasksListComponent TasksList={TasksStateVar} />
      </ol>
    </div>
  );
}

export default ToDo;
