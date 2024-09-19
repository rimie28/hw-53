const Task = ({task, deleteTask}) => {
    return (
        <div className="task">
            <p>{task.text}</p>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    )
};

export default Task;