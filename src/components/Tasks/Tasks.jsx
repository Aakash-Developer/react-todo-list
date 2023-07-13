import React from "react";

export default function Tasks({ taskList, setTaskList, Usertask, setUsertask }) {
  const handelDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const handelEdit = (id) => {
    setUsertask(taskList.find((task) => task.id === id));
  };

  return (
    <div className="task-box">
      <div className="card border-0 bg-transparent">
        <div className="text-center text-md-start mb-3 mb-md-5 d-flex justify-content-between align-items-center flex-wrap">
          <button type="button" className="btn mybadge shadow-none">
            Total Tasks
            <span className="badge bg-light text-dark ms-1"> {taskList.length}</span>
          </button>
          <button
            type="button"
            className="btn mybadge shadow-none"
            onClick={() => {
              setTaskList([]);
            }}>
            Clear All
          </button>
        </div>
        <div className="card-body d-flex flex-wrap  justify-content-between p-0 ">
          {taskList.map((task) => (
            <div
              key={task.id}
              className={
                task.status === "completed"
                  ? "card task-inner-card  border-5  border-top-0 border-end-0 border-bottom-0 border-success bg-light rounded overflow-hidden"
                  : "card task-inner-card  border-5  border-top-0 border-end-0 border-bottom-0 border-danger bg-light rounded overflow-hidden"
              }>
              <div
                className={
                  task.status === "completed" ? "card-body d-flex justify-content-between align-items-start completed" : "card-body d-flex justify-content-between align-items-start pendding"
                }>
                <div className="status pe-5">
                  <h6 className="card-title m-0 text-capitalize text-break">{task.task}</h6>
                  <span className="text-muted text-capitalize">{task.status}</span>
                  <span className="text-muted text-small d-block m-0" style={{ fontSize: "10px" }}>
                    {task.time}
                  </span>
                </div>
                <div className="action d-flex flex-column">
                  <i
                    className="bi bi-pencil-square text-success fs-4 p-0"
                    onClick={() => {
                      handelEdit(task.id);
                    }}></i>
                  <i
                    className="bi bi-trash3-fill text-danger fs-4 p-0"
                    onClick={() => {
                      handelDelete(task.id);
                    }}></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
