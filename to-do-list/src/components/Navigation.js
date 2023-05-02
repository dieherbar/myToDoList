import styles  from '@/styles/Home.module.css'

export default function Navigation() {
    return (
      <nav  className={styles.navigation}>
        <ul >
          <li ><a href="/">Inicio</a></li>
          <li><a href="/about">Acerca de</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
    );
  }