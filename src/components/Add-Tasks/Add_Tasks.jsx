import React from 'react'

export default function Add_Tasks() {
  return (
  <div className="input-group my-5 ">
  <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
  <select className="form-select" aria-label="Default select example">
  <option selected value={'Pendding'}>Pendding</option>
  <option value={'Completed'}>Completed</option>
</select>
  <button className="btn btn-outline-success text-uppercase d-flex align-items-center" type="button" id="button-addon2"><i className="bi bi-plus fw-bold fs-4"></i> Add Task</button>
</div>
  )
}
