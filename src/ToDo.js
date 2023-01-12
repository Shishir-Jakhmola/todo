import { useState, useRef } from "react";
import "./ToDo.css";

function ToDo() {
  let [Tasks, SetTasks] = useState([]);
  let [EditingTaskId, SetEditingTaskId] = useState('');
  let [EditingTaskTitle, SetEditingTaskTitle] = useState('');
  let TaskTitle = useRef();
  return (
    <div className="todo">
      <h1>ToDo App</h1>

      <form
        id="ToDoForm"
        onSubmit={(e) => {
          e.preventDefault();
          SetTasks([
            ...Tasks,
            {
              Id: Tasks.length,
              TaskTitle: TaskTitle.current.value,
            },
          ]);
          TaskTitle.current.value = "";
        }}
      >
        <label htmlFor="title">Task Title </label>
        <input type="text" id="title" ref={TaskTitle}></input>
        <input type="submit"></input>
      </form>

      <ol>
        {Tasks.map((task) => {
          return (
            <li key={task.Id}>
              {EditingTaskId === task.Id ? <input type="text" value={EditingTaskTitle} onChange={(e) => {SetEditingTaskTitle(e.target.value)}}></input> : task.TaskTitle}
              <button onClick={() => {SetEditingTaskId(task.Id);SetEditingTaskTitle(task.TaskTitle)}}>Edit</button>
              <button onClick={() => {let UpdatedTasks = Tasks.map((task) => {if (task.Id === EditingTaskId) {return {
                Id: EditingTaskId,
                TaskTitle: EditingTaskTitle,
              };
              };
              return task;});
              SetTasks(UpdatedTasks);
              SetEditingTaskId('');
              SetEditingTaskTitle('');
              }}>Save</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default ToDo;
