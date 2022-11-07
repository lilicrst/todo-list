import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from 'phosphor-react';

import { Header } from './components/Header';
import { Task } from './components/Task'
import { EmptyList } from './components/EmptyList'

import './global.css';
import styles from './App.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useEffect } from 'react';


export function App() {

  const [tasks, setTasks] = useState(
    [      
      {
        id: uuidv4(),
        title: "tirar a obrigatoriedade de ter uma task prévia pra o ngc funcionar",
        isComplete: false
      }
    ]
  )

  const [newTaskText, setNewTaskText] = useState('')

  const [taskCounter, setTaskCounter] = useState(0)

  const [doneTaskCounter, setDoneTaskCounter] = useState(0)

  useEffect(() => {
    setTaskCounter(tasks.length);
  }, [tasks]);

  useEffect(() => {
    catDoneTaskNumber();
  }, [tasks])

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, { id: uuidv4(), title: newTaskText, isComplete: false }]);
    setNewTaskText('');
  }

  function handleNewTaskInput(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskText(event.target.value);
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeleteOne = tasks.filter(task => {
      return (
        task.id !== taskToDelete
      )
    })

    setTasks(tasksWithoutDeleteOne);    
  }

  function markTask(idTaskToMark: string) {
    const changeStateOffTask = tasks.map(task => {
      if (task.id == idTaskToMark) {
        task.isComplete = !task.isComplete
      }
    })
    catDoneTaskNumber();
  }

  function emptyTaskList() {
    if (tasks.length <= 0) {
      return (
        <EmptyList />
      )
    }
  }

  function catDoneTaskNumber() {
    const number = tasks.filter(task => task.isComplete == true)
    setDoneTaskCounter(number.length);
  }


  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form onSubmit={handleCreateNewTask} className={styles.taskForm}>

          <textarea
            name="task"
            placeholder='Adicione uma nova tarefa'
            value={newTaskText}
            onChange={handleNewTaskInput}
            required
          />

          <button type='submit' disabled={newTaskText.length == 0}>
            Criar
            <PlusCircle size={19} weight="bold" />
          </button>

        </form>

        <div className={styles.list}>
          <header>
            <div className={styles.createdTaskInfo}>
              <strong>Tarefas criadas</strong>
              <span className={styles.counter}>{taskCounter}</span>
            </div>
            <div className={styles.completeTaskInfo}>
              <strong>Concluídas</strong>
              <span className={styles.counter}>{doneTaskCounter} de {taskCounter}</span>
            </div>
          </header>

          <main>
            {tasks.map(task => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  isComplete={task.isComplete}
                  onDeleteTask={deleteTask}
                  onTaskDone={markTask}
                />)
            })}
            {emptyTaskList()}
          </main>

        </div>

      </div>
    </div>
  );
}
