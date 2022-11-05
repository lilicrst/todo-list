import styles from './EmptyList.module.css'
import { ClipboardText } from 'phosphor-react';

export function EmptyList() {
  return (
    <div className={styles.wrapper}>
      <ClipboardText className={styles.clipboarIcon} size={56} weight='light' />

      <div className={styles.text}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}