import { useSelector } from 'react-redux';
import './App.css';
import Form from './Form';
import ListItems from './ListItems';

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
  const todos = useSelector(({ todos }) => todos);
  //console.log(todos);
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tudus</h1>
      <header style={styles.formContainer}>
        <Form />
      </header>
      <ListItems todoItems={todos} />
    </div>
  );
}

export default App;
