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

function Approach() {
  const a = siteConfig.approach;
  return (
    <section id="practice" className={styles.labelSection} aria-labelledby="approach-kicker">
      <div className={styles.column}>
        <div className={styles.labelGrid}>
          <p className={styles.kicker} id="approach-kicker">{a.kicker}</p>
          <div>
            <p className={styles.approachIntro}><Rich html={a.intro} /></p>
            <div className={styles.principles}>
              {a.principles.map((p) => (
                <div key={p.title} className={styles.principle}>
                  <h3 className={styles.principleTitle}>{p.title}</h3>
                  <p className={styles.principleBody}><Rich html={p.body} /></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Quote() {
  const q = siteConfig.quote;
  return (
    <section className={styles.quote} aria-label="Quote">
      <div className={styles.column}>
        <blockquote className={styles.blockquote}>“{q.text}”</blockquote>
        <p className={styles.attribution}>{q.attribution}</p>
      </div>
    </section>
  );
}

function PhotoBand() {
  const p = siteConfig.photoBand;
  return (
    <section className={styles.photoBand} aria-label="Photo">
      <figure className={styles.photoFigure}>
        <iframe
          src="/capital-flow.html"
          title="Capital flow: Hesed deploys into Pipestaff, LokiMode, and Colorado CareAssist"
          className={styles.photoFrame}
          loading="lazy"
        />
      </figure>
      <div className={styles.column}>
        <p className={styles.photoCaption}>{p.caption}</p>
      </div>
    </section>
  );
}

function Holdings() {
  const h = siteConfig.holdings;
  return (
    <section id="holdings" className={styles.labelSection} aria-labelledby="holdings-kicker">
      <div className={styles.column}>
        <div className={styles.labelGrid}>
          <p className={styles.kicker} id="holdings-kicker">{h.kicker}</p>
          <div>
            <h2 className={styles.labelHeadline}>{h.headline}</h2>
            <p className={styles.holdingsBody}>{h.intro}</p>
            <div className={styles.holdingsRows}>
              {h.rows.map((r) => (
                <div key={r.company} className={styles.holdingRow}>
                  <div className={styles.holdingCol1}>
                    <span className={styles.holdingCat}>{r.tag.label}</span>
                    <h3 className={styles.holdingCompany}>{r.company}</h3>
                  </div>
                  <div className={styles.holdingCol2}><p>{r.body}</p></div>
                  <div className={styles.holdingCol3}>
                    <a href={r.href} target="_blank" rel="noopener">{r.linkLabel}</a>
                  </div>
                </div>
              ))}
            </div>
            <p className={styles.holdingFootnote}>
              {h.footnote.lead}
              <a href={h.footnote.href} target="_blank" rel="noopener">{h.footnote.linkLabel}</a>
              {h.footnote.tail}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosePoster() {
  const c = siteConfig.close;
  return (
    <section id="contact" className={styles.closePoster} aria-labelledby="close-kicker">
      <div className={styles.column}>
        <p className={`${styles.kicker} ${styles.kickerPoster}`} id="close-kicker">{c.kicker}</p>
        <h2 className={styles.closePosterH2}>{c.h2}</h2>
        <div className={styles.closePosterActions}>
          {c.buttons.map((b) => (
            <a key={b.label} className="btn btn-ghost" href={b.href} target="_blank" rel="noopener">{b.label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CloseQuiet() {
  const c = siteConfig.close;
  return (
    <section id="contact" className={styles.closeQuiet} aria-labelledby="close-kicker">
      <div className={styles.column}>
        <p className={styles.kicker} id="close-kicker">{c.kicker}</p>
        <h2 className={styles.closeQuietH2}>{c.h2}</h2>
        <div className={styles.closeQuietActions}>
          {c.buttons.map((b) => (
            <a key={b.label} className="btn btn-secondary" href={b.href} target="_blank" rel="noopener">{b.label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const f = siteConfig.footer;
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <div className={styles.footerInner}>
          <div className={styles.footerLeft}>
            <p className={styles.footerBrandLine}>
              {f.brandLine.brand}<span>{f.brandLine.tail}</span>
            </p>
            <p>
              {f.addressLine}
              <a href={f.phone.href}>{f.phone.label}</a>
            </p>
            <p className={styles.footerLicense}>{f.licenseLine}</p>
          </div>
          <div className={styles.footerRight}>
            <p>
              {f.holdingsLeadLabel + ' '}
              {f.holdingsLine.map((h, i) => (
                <span key={h.href}>
                  {i > 0 && ' · '}
                  <a href={h.href} target="_blank" rel="noopener">{h.label}</a>
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <NameSection />
      <Approach />
      <Quote />
      {siteConfig.showPortrait && <PhotoBand />}
      <Holdings />
      {siteConfig.posterClose ? <ClosePoster /> : <CloseQuiet />}
      <Footer />
    </main>
  );
}
