import "./add_task.css";

export default function Add_Tasks() {
  const taskValue = (val) => {
    console.log(val);
  };

  return (
    <div className="my-3 mt-5 my-md-5">
      <form className="container">
        <div className="row align-items-start">
          <div className="col-12 col-md-7 col-sm-12  px-1">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="New Task"
                onChange={taskValue}
              />
            </div>
          </div>

          <div className="col-6 col-md-3 col-sm-6 px-1">
            <select
              className="form-select w-100"
              aria-label="Default select example"
            >
              <option value="2">Completed</option>
              <option value="3">Pending</option>
            </select>
          </div>

          <div className=" col-6 col-md-2 col-sm-6 px-1">
            <button type="button" className="btn btn-outline-success w-100">
              ADD TASK
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
