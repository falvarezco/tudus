import { useDispatch } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';

import { EDIT_TODO, DELETE_TODO } from './store/actionTypes';
import { TodoItemType } from './store/reducer';

type ListItemsProps = {
  todoItems: TodoItemType[];
};

const styles = {
  item: {
    background: '#fff',
    margin: '5px 0px',
  },
};

const ListItems = ({ todoItems }: ListItemsProps) => {
  const dispatch = useDispatch();
  const todosIsEmpty = todoItems.length === 0;

  const handItemAction = (isDelete: boolean, todo: TodoItemType) =>
    isDelete && dispatch({ type: DELETE_TODO, payload: todo });

  const handleCheckItem = (todo: TodoItemType) =>
    dispatch({ type: EDIT_TODO, payload: { ...todo, done: !todo.done } });

  return todosIsEmpty ? <h3 style={{textAlign: 'center'}}>No Tudus to show</h3> 
    : (
    <List>
      {todoItems.map((todo) => (
        <ListItem
          sx={styles.item}
          key={`${todo.id}-${todo.todoText}`}
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handItemAction(true, todo)}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <Checkbox
            checked={todo.done}
            onChange={() => handleCheckItem(todo)}
          />
          <ListItemText primary={todo.todoText} />
        </ListItem>
      ))}
    </List>
  );
};

export default ListItems;
