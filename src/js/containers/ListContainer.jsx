import React from 'react'
import axios from 'axios'
import { Container } from 'semantic-ui-react'

import AddTodoForm from '../components/AddTodoForm'
import List from '../components/List'

class ListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/getTodos')
            .then((res) => {
                this.setState({ todos: res.data.todos })
            })
    }

    render() {
        return (
            <Container id='todo-list-container'>
                <AddTodoForm />
                <List
                    todos={this.state.todos}
                />
            </Container>
        )
    }
}


export default ListContainer
