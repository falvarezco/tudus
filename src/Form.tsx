import { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ADD_TODO } from './store/actionTypes';

const Form: React.FC = () => {
  const [todoText, setNewTodoVal] = useState<string>('');

  const dispatch = useDispatch();
  const updateField = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewTodoVal(e.currentTarget.value);
  };

  const isButtonDisabled = () => todoText === '';

  const handleAddItem = () => {
    todoText !== '' &&
      dispatch({ type: ADD_TODO, payload: { todoText, done: false } });
    setNewTodoVal('');
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Type New Item"
        variant="outlined"
        value={todoText}
        onChange={(e) => updateField(e)}
      />
      <Button
        variant="contained"
        disabled={isButtonDisabled()}
        onClick={() => handleAddItem()}
      >
        Add
      </Button>
    </>
  );
};

export default Form;
