import "./add_task.css";

export default function Add_Tasks({ taskList, setTaskList, Usertask, setUsertask }) {
  const hendelSubmit = (e) => {
    e.preventDefault();
    if (Usertask.id) {
      const date = new Date();
      const UpdatedTaskList = taskList.map((task) =>
        task.id === Usertask.id ? { id: task.id, task: e.target.task.value, status: e.target.status.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : task
      );
      setTaskList(UpdatedTaskList);
      setUsertask({});
    } else {
      const date = new Date();
      const task = {
        id: date.getTime(),
        task: e.target.task.value,
        status: e.target.status.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      if (e.target.task.value !== "" && e.target.task.value !== undefined) {
        setTaskList([...taskList, task]);
        setUsertask({});
      }
    }
    e.target.task.value = "";
    e.target.status.value = "pending";
  };

  return (
    <div className="my-3 mt-5 my-md-5">
      <form className="container" onSubmit={hendelSubmit}>
        <div className="row align-items-start">
          <div className="col-12 col-md-7 col-sm-12  px-1">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="New Task" name="task" value={Usertask.task || ""} onChange={(e) => setUsertask({ ...Usertask, task: e.target.value })} />
            </div>
          </div>

          <div className="col-6 col-md-3 col-sm-6 px-1">
            <select
              className="form-select w-100"
              name="status"
              aria-label="Default select example"
              value={Usertask.status || "pending"}
              onChange={(e) => setUsertask({ ...Usertask, status: e.target.value })}>
              <option value="pending" defaultValue>
                Pending
              </option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div className=" col-6 col-md-2 col-sm-6 px-1">
            <button type="submit" className="btn btn-outline-success w-100">
              {Usertask.id ? "UPDATE TASK" : "ADD TASK"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
