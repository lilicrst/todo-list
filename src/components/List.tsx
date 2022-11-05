import { v4 as uuidv4 } from 'uuid';
import styles from './List.module.css';
import { Task } from './Task';

const tasks = [
  {
    id: uuidv4(),
    title: 'Problema "Each child in a list should have a unique key prop" (ver no console)',
    isComplete: false
  },
  {
    id: uuidv4(),
    title: 'Unir "list" a "app"',
    isComplete: false
  },
  {
    id: uuidv4(),
    title: "Deixar css do checkIcon de acordo com o estado",
    isComplete: false
  },
  {
    id: uuidv4(),
    title: "Fazer css da lista vazia",
    isComplete: false
  },
  {
    id: uuidv4(),
    title: "Fazer js das tasks e dos contadores",
    isComplete: false
  }
]

export function List(props) {
  return (
    <div className={styles.list}>
      <header>
        <div className={styles.createdTaskInfo}>
          <strong>Tarefas criadas</strong>
          <span className={styles.counter}>5</span>
        </div>
        <div className={styles.completeTaskInfo}>
          <strong>Concluídas</strong>
          <span className={styles.counter}>2 de 5</span>
        </div>
      </header>

      <main>
        {tasks.map(task => {
          return (
          <Task 
            title={task.title}
          />)
        })}
      </main>

    </div>
  );
}