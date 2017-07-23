import React from 'react'
import { Form } from 'semantic-ui-react'

const AddTodoForm = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Input placeholder='Add todo ..' />
                <Form.Button content='Submit' color='pink' />
            </Form.Group>
        </Form>
    )
}


export default AddTodoForm
