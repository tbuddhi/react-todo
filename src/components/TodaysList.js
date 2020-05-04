import React from 'react'

const ListItem = ({todoItems}) => {
    return(
        <div>
            <ul>
                {todoItems.map( todoItem => {
                    return <li key={todoItem.id}>{todoItem.name}</li>
                })}
            </ul>
        </div>
    )
}

export default ListItem