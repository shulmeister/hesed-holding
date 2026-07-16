import { siteConfig } from '../lib/site-config';
import styles from './page.module.css';

function Nav() {
  const { links, contactLabel, contactHref } = siteConfig.nav;
  return (
    <nav className={styles.nav} aria-label="Primary">
      <div className={styles.navInner}>
        <a href="#name" className={styles.brand}>
          <span className={styles.brandMark} aria-hidden="true" />
          {siteConfig.brand.name}
        </a>
        <div className={styles.navLinks}>
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a className="btn btn-secondary" href={contactHref}>{contactLabel}</a>
        </div>
      </div>
    </nav>
  );
}

export default function Page() {
  return (
    <main>
      <Nav />
    </main>
  );
}
