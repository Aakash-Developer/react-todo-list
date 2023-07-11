import React from "react";

export default function Tasks({ taskList, setTaskList }) {
  // const tasks = [
  //   { id: 101, task: "Learn Javascript", status: "pennding" },
  //   { id: 102, task: "Learn Css", status: "pennding" },
  //   { id: 103, task: "Learn html", status: "completed" },
  //   { id: 104, task: "Learn python", status: "pennding" },
  //   { id: 105, task: "work on projects", status: "completed" },
  //   { id: 106, task: "call to friend", status: "pennding" },
  //   { id: 107, task: "Learn english", status: "completed" },
  //   { id: 108, task: "metting 7:30 ", status: "completed" },
  //   { id: 109, task: "watch Movie ", status: "pending" },
  // ];
  return (
    <div className="task-box">
      <div className="card border-0">
        <div className="text-center text-md-start mb-3 mb-md-5 d-flex justify-content-between align-items-center flex-wrap">
          <button type="button" class="btn mybadge shadow-none">
            Total Tasks
            <span class="badge bg-light text-dark ms-1">
              {" "}
              {taskList.length}
            </span>
          </button>
          <button
            type="button"
            class="btn mybadge shadow-none"
            onClick={() => {
              setTaskList([]);
            }}
          >
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
              }
            >
              <div
                className={
                  task.status === "completed"
                    ? "card-body d-flex justify-content-between align-items-start completed"
                    : "card-body d-flex justify-content-between align-items-start pendding"
                }
              >
                <div className="status">
                  <h6 className="card-title m-0 text-capitalize">
                    {task.task}
                  </h6>
                  <span className="text-muted text-capitalize">
                    {task.status}
                  </span>
                  <span
                    className="text-muted text-small d-block m-0"
                    style={{ fontSize: "10px" }}
                  >
                    {task.time}
                  </span>
                </div>
                <div className="action">
                  <i className="bi bi-pencil-square text-success fs-4 p-2"></i>
                  <i className="bi bi-trash3-fill text-danger fs-4 p-2"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
