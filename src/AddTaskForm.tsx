
const AddTaskForm = ({currentTask, setCurrentTask, addTask}) => {
    return (
        <div className="AddTaskForm">
            <input placeholder="Add Task" value={currentTask} onChange={(e) => setCurrentTask(e.target.value)}/>
            <button onClick={addTask}>Add</button>
        </div>
    )
};

export default AddTaskForm;