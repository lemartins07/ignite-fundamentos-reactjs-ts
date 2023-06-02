import { PencilSimple } from 'phosphor-react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=70"
      />

      <div className={styles.profile}>
        <Avatar
          hasBorder
          src="https://avatars.githubusercontent.com/u/40571653?v=4"
        />
        <strong>Leandro Martins</strong>
        <span>Fullstack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimple size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
