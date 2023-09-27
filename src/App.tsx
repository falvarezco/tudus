import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Form from './Form';
import ListItems from './ListItems';
import { TODOS_REQUESTED } from './store/actionTypes';
import { StateType } from './store/reducer';

export type CustomStyles = {
  [prop: string]: React.CSSProperties;
};

const styles: CustomStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    textAlign: 'center',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
};

function App() {
  const { todos, loading } = useSelector((state: StateType) => state);
  const dispatch = useDispatch();
  const showLoading = todos.length >= 1 && loading;

  useEffect(() => {
    dispatch({type: TODOS_REQUESTED});
  }, [dispatch]);

  return showLoading ? <h3 style={{textAlign: 'center'}}>..loading</h3>
  : (
    <div style={styles.container}>
      <h1 style={styles.title}>Tudus</h1>
      <header style={styles.formContainer}>
        <Form />
      </header>
      <ListItems todoItems={todos} />
    </div>
  )
}

export default App;
