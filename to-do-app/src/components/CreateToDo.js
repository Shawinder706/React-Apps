import React from 'react'

// create class component
class CreateToDo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: ' ',
            responsible: ' ',
            priority: ' ',
            submission: false
        }
    }
    // get description value on change event
    onDescriptionChanged = (e) => {
        this.setState({
            description: e.target.value
        })

    }
    // get Responsible value on change event
    onResponsibleChanged = (e) => {
        this.setState({
            responsible: e.target.value
        })

    }
    // get priority on change event
    onPriorityChanged = (e) => {
        this.setState({
            priority: e.target.value
        })
    }
    // form submission and reset the state
    onFormSubmit = (e) => {
        e.preventDefault();

        console.log(this.state.description)
        console.log(this.state.responsible)
        console.log(this.state.priority)

        // reset the state of the app 
        this.setState({
            description: ' ',
            responsible: ' ',
            priority: ' ',
            submission: false
        })
    }

    render() {
        return (
            <div>
                <h5>Create To Do</h5>
                <form onSubmit={this.onFormSubmit}>
                    <div className='form-group'>
                        <label>Description:</label>
                        <input type='text' name='todoDescrition'
                            className='form-control' onChange={this.onDescriptionChanged}
                            value={this.state.description} />
                    </div>
                    <div className='form-group'>
                        <label>Responsible:</label>
                        <input type="text" name='todoResponsibility'
                            className='form-control' onChange={this.onResponsibleChanged}
                            value={this.state.responsible} />
                    </div>
                    <div className='form-group'>
                        <div className='form-check-inline'>
                            <input type='radio' name='priority'
                                className='form-check-input' value='Low'
                                onChange={this.onPriorityChanged}
                                checked={this.state.priority === 'Low'}
                            />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className='form-check-inline'>
                            <input type='radio' name='priority'
                                className='form-check-input' value='Medium'
                                onChange={this.onPriorityChanged}
                                checked={this.state.priority === 'Medium'}
                            />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className='form-check-inline'>
                            <input type='radio' name='priority'
                                className='form-check-input' value='High'
                                onChange={this.onPriorityChanged}
                                checked={this.state.priority === 'High'}
                            />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className='form-group'>
                        <button type='submit' className="btn btn-primary">Create To Do</button>
                    </div>
                </form>
            </div >
        )
    }
}

export default CreateToDo;