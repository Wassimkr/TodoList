import React, {useState } from 'react';
import './Todo.css';
import {List, ListItem, ListItemText, ListItemAvatar, Button } from '@material-ui/core';
import db from './firebase';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';



function Todo(props) {
    return (
        <>
        
        <List className="todo_List">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary="Dont Forget" />
            </ListItem>
            <IconButton aria-label="delete">
                <DeleteIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
            </IconButton>
            
        </List>
        </>
    )
}

export default Todo
