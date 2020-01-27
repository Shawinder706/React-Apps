import React from 'react'


const CreateToDo = () => {
    return (
        <div>
            <h2>Create To Do</h2>
            <p>
                <label>Description:</label>
                <input type='text' name='to-do' />
            </p>

            <p>
                <label>Responsible:</label>
                <input type="text" name='resp' />
            </p>
            <p>
                <button>Create To Do</button>
            </p>

        </div>
    )
}

export default CreateToDo;