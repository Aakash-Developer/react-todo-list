import './add_task.css';
export default function Add_Tasks() {
  return (
    <div className='my-5'>
    <form>
         <div class="row align-items-start">
          <div class="col-12 col-md-7 col-sm-12  px-1">
          <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder='New Task'/>
        </div>
          </div>
          <div class=" col-6 col-md-3 col-sm-6 px-1">
          <select class="form-select w-100" aria-label="Default select example">
  <option value="2">Completed</option>
  <option value="3">Pending</option>
</select>
          </div>
          <div class=" col-6 col-md-2 col-sm-6 px-1">
          <button type="button" class="btn btn-outline-success w-100">ADD TASK</button>
          </div>
         </div>
    </form>
    </div>
  )
}
