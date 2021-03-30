import { Button, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import './Todo.css'
import db from './firebase'
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const updateTask = () => {
        db.collection('todos').doc(props.todo.id).set({
             todo: input
        }, { merge: true })

        setOpen(false);
    }

    return (
        <>
        <Modal 
            open={open}
            onClose={handleClose}
        >
            <div className={classes.paper}>
                <h1>Update Task</h1>
                <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                <Button onClick={updateTask}>Update</Button>
            </div>
        </Modal>
        <List className='todo__list'>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary='Deadline: '/>
            </ListItem>
            <button onClick={event => setOpen(true)}>Edit</button>
            <DeleteIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
        </List>
        </>
            

    )
}

export default Todo
