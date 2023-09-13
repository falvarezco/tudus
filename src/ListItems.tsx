import { useDispatch } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
//import ListItemIcon from '@mui/material/ListItemIcon';
//import ModeEditIcon from '@mui/icons-material/ModeEdit';
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

  const handItemAction = (isDelete: boolean, todo: TodoItemType) =>
    isDelete && dispatch({ type: DELETE_TODO, payload: todo });

  const handleCheckItem = (todo: TodoItemType) =>
    dispatch({ type: EDIT_TODO, payload: { ...todo, done: !todo.done } });

  return (
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
          {/*<ListItemIcon>
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={() => handItemAction(false, todo)}
            >
            <ModeEditIcon />
            </IconButton>
          </ListItemIcon>*/}
        </ListItem>
      ))}
    </List>
  );
};

export default ListItems;
