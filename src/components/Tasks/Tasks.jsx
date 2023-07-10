import React from 'react'

export default function Tasks() {
  return (
    <div className='task-box'>
    <div className='card border-0'>
    <div className='card-body d-flex flex-wrap  justify-content-between p-0 '>
        <div className='card task-inner-card  border-5  border-top-0 border-end-0 border-bottom-0 border-danger bg-light rounded overflow-hidden'>
        <div className='card-body d-flex justify-content-between align-items-start pendding'>
               <div className='status'>
                   <h6 className='card-title m-0'>Learn new Project in react</h6>
                   <span className='text-muted text-capitalize'>pennding</span>
               </div>
               <div className='action'>
               <i class="bi bi-pencil-square text-success fs-4 p-2"></i>
               <i class="bi bi-trash3-fill text-danger fs-4 p-2"></i>
               </div>
        </div>
        </div>

        <div className='card task-inner-card  border-5 border-top-0 border-end-0 border-bottom-0 border-success bg-light rounded overflow-hidden'>
        <div className='card-body d-flex justify-content-between align-items-start completed'>
               <div className='status'>
                   <h6 className='card-title m-0'>Learn new Project in react</h6>
                   <span className='text-muted text-capitalize'>completed</span>
               </div>
               <div className='action'>
               <i class="bi bi-pencil-square text-success fs-4 p-2"></i>
               <i class="bi bi-trash3-fill text-danger fs-4 p-2"></i>
               </div>
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}
