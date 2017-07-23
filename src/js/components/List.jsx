import React from 'react'
import { List } from 'semantic-ui-react'
//import PropTypes from 'prop-types'

const _List = (props) => {
    /*let itemsCollection = _.map(props.items, (element, index) => {
        return (
            <li key={index}>{element.content}</li>
        )
    })*/

    return (
        <List id='todo-list' relaxed>
            <List.Item>
                <List.Icon name='tag' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Description>test1</List.Description>
                </List.Content>
            </List.Item>

            <List.Item>
                <List.Icon name='tag' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Description>test2</List.Description>
                </List.Content>
            </List.Item>
        </List>
    )
}

/*List.propTypes = {
    items: PropTypes.array.isRequired
}*/


export default _List
