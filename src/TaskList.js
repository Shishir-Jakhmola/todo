export function TasksListComponent({TasksList}) {
    console.log('TasksList', TasksList)
    if (TasksList.length !== 0) {
        return (
            <ol>
                {TasksList.map((task) => {return <li key={task.Id}>{task.TaskTitle}</li>})}
            </ol>
        )
    } 
    return (
        <ol>
        </ol>
    )
}