import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'

const AddTodoForm = (props) => {
    return (
        <Form onSubmit={props.handleOnSubmit}>
            <Form.Group>
                <Form.Input
                    name='content'
                    value={props.content}
                    placeholder='Add todo ..'
                    onChange={props.handleOnChange}
                />

                <Form.Button content='Submit' color='pink' />
            </Form.Group>
        </Form>
    )
}

AddTodoForm.propTypes = {
    content: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired
}


export default AddTodoForm
