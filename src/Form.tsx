import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ADD_TODO } from './store/actionTypes';

interface HandleNameChangeInterface {
  target: HTMLInputElement;
}

const Form: React.FC = () => {
  const [todoText, setNewTodoVal] = useState<string>('');

  const dispatch = useDispatch();

  const updateField = (e: HandleNameChangeInterface) => {
    const {
      target: { value },
    } = e;
    setNewTodoVal(value);
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
        //Add proper typing here
        /*eslint-disable @typescript-eslint/no-explicit-any*/
        onChange={(e: any) => updateField(e)}
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
