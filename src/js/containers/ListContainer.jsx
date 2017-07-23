import React from 'react'
import axios from 'axios'
import { Container } from 'semantic-ui-react'

import AddTodoForm from '../components/AddTodoForm'
import List from '../components/List'

class ListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: '',
            todos: []
        }

        this.addTodo = this.addTodo.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:5000/getTodos')
            .then((res) => {
                this.setState({ todos: res.data.todos })
            })
    }

    addTodo(content) {
        axios.post('http://localhost:5000/addTodo', {content: content})
            .then((res) => {
                this.setState({ todos: res.data.todos })
            })
    }

    handleOnChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleOnSubmit(e) {
        e.preventDefault()
        this.addTodo(this.state.content)
    }

    render() {
        return (
            <Container id='todo-list-container'>
                <AddTodoForm
                    content={this.state.content}
                    handleOnChange={this.handleOnChange}
                    handleOnSubmit={this.handleOnSubmit}
                />

                <List
                    todos={this.state.todos}
                />
            </Container>
        )
    }
}


export default ListContainer
