import React from 'react'

import List from '../components/List'

class ListContainer extends React.Component {
    render() {
        return (
            <div id='todo-list-container'>
                <List />
            </div>
        )
    }
}


export default ListContainer
