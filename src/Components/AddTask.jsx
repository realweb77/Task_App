export default function AddTask({ taskList, setTaskList, task, setTask }) {
    function handleSubmit(e) {
        e.preventDefault();
        if(task.id) {
            const date = new Date();
            const updatedTaskList = taskList.map((todo) =>
                 todo.id === task.id
             ? {
                id: task.id, 
                name: task.name, 
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
                }
             : todo,
            );
            setTaskList(updatedTaskList);
            setTask({});
        } else {
            const date = new Date();
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            };
            setTaskList([... taskList, newTask]);
            setTask({});
        }
    }

    return (
        <>
          <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input
                type="text" 
                name="task" 
                autoComplete="off" 
                placeholder="Add Task"
                maxLength={25}
                value={task.name || ""}
                onChange={(e) => setTask({...task, name: e.target.value})}
                />
                <button type="submit">{task.id ? "Update" : "Add"}</button> 
            </form>
          </section>
        </>
    );
}