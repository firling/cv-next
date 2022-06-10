import styles from './styles/Menu.module.scss'

export default function menu() {
  return (
    <ul className={styles.menu}>
      <li className={styles.menu__elt}><a className={styles.active} href="#">Accueil</a></li>
      <li className={styles.menu__elt}><a href="#">à Propos</a></li>
      <li className={styles.menu__elt}><a href="#">CV</a></li>
      <li className={styles.menu__elt}><a href="#">Portfolio</a></li>
      <li className={styles.menu__elt}><a href="#">Témoignages</a></li>
      <li className={styles.menu__elt}><a href="#">Contact</a></li>
    </ul>
  );
}