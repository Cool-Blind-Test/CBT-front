import Link from "next/link";
import styles from "../../sass/layout/Footer.module.scss";
import { Twitter, GitHub } from "react-feather";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.topRow}>
          <h1 className={styles.title}>CBT</h1>
          <div className={styles.logos}>
            <Twitter className={styles.logo} />
            <a
              href="https://github.com/Cool-Blind-Test"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub className={styles.logo} />
            </a>
          </div>
        </div>
        <div className={styles.lists}>
          <ul>
            <li className={styles.li}>À propos</li>
            <li className={styles.li}>Nous contacter</li>
          </ul>
          <ul>
            <li className={styles.li}>Conditions d&apos;utilisation</li>
            <li className={styles.li}>Mentions légales</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
