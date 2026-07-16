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

function Hero() {
  const h = siteConfig.hero;
  return (
    <section id="name" className={styles.hero}>
      <div className={styles.column}>
        <p className={styles.kicker}>{h.eyebrow}</p>
        <span lang="he" dir="rtl" className={styles.monument}>{h.monument}</span>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.phonetic}>{h.phonetic}</p>
            <p className={styles.pronSub}>
              {h.pronunciation}
              <span lang="he" dir="rtl" className={styles.pronSubHeb}>{h.pronunciationHebrew}</span>
            </p>
          </div>
          <div>
            <h1 className={styles.heroH1}>{h.h1}</h1>
            <p className={styles.heroSub}>
              {h.subLead}
              <strong>{h.subEmphasis}</strong>
              {h.subTail}
            </p>
            <div className={styles.heroActions}>
              {h.actions.map((a) => (
                <a key={a.label} className={`btn btn-${a.variant}`} href={a.href}>{a.label}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Rich({ html }: { html: string }) {
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

function NameSection() {
  const n = siteConfig.nameSection;
  return (
    <section className={styles.labelSection} aria-labelledby="name-section">
      <div className={styles.column}>
        <div className={styles.labelGrid}>
          <p className={styles.kicker} id="name-section">{n.kicker}</p>
          <div>
            <h2 className={styles.labelHeadline}>{n.headline}</h2>
            {n.paragraphs.map((p, i) => (
              <p key={i} className={styles.labelBody}><Rich html={p} /></p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <NameSection />
    </main>
  );
}
