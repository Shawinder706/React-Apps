import React from 'react'


const CreateToDo = () => {
    return (
        <div>
            <h5>Create To Do</h5>
            <form>
                <div className='form-group'>
                    <label>Description:</label>
                    <input type='text' name='to-do' className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Responsible:</label>
                    <input type="text" name='resp' className='form-control' />
                </div>
                <div className='form-group'>
                    <div className='form-check-inline'>
                        <input type='radio' name='priority' className='form-check-input' />
                        <label className="form-check-label">Low</label>
                    </div>
                    <div className='form-check-inline'>
                        <input type='radio' name='priority' className='form-check-input' />
                        <label className="form-check-label">Medium</label>
                    </div>
                    <div className='form-check-inline'>
                        <input type='radio' name='priority' className='form-check-input' />
                        <label className="form-check-label">High</label>
                    </div>
                </div>
                <div className='form-group'>
                    <button type='submit' class="btn btn-primary">Create To Do</button>
                </div>
            </form>
        </div>


    )
}

export default CreateToDo;