import styles from '../styles/CorgiLoader.module.css';

const CorgiLoader = ({ text = 'Fetching GitHub data...' }) => (
  <div className={styles.wrapper}>
    <div className={styles.track}>

      {/* CROSSING 1: oreo LTR (t=0) meets redvelvet RTL (t=2) */}
      <div className={`${styles.corgi} ${styles.ltr}`} style={{ animationDelay: '0s' }}>
        <img src="/oreo.gif" alt="" className={styles.gif} />
      </div>
      <div className={`${styles.corgi} ${styles.rtl}`} style={{ animationDelay: '2s' }}>
        <img src="/redvelvet.gif" alt="" className={styles.gif} />
      </div>

      {/* SOLO: chocolatechip RTL (t=8) */}
      <div className={`${styles.corgi} ${styles.rtl}`} style={{ animationDelay: '8s' }}>
        <img src="/chocolatechip.gif" alt="" className={styles.gif} />
      </div>

      {/* SOLO: KINAKO RTL (t=14) */}
      <div className={`${styles.corgi} ${styles.rtl}`} style={{ animationDelay: '14s' }}>
        <img src="/KINAKO.gif" alt="" className={styles.gif} />
      </div>

      {/* CROSSING 2: crab LTR (t=20) meets MANEKI RTL (t=22) */}
      <div className={`${styles.corgi} ${styles.ltr}`} style={{ animationDelay: '20s' }}>
        <img src="/crab.gif" alt="" className={styles.gif} />
      </div>
      <div className={`${styles.corgi} ${styles.rtl}`} style={{ animationDelay: '22s' }}>
        <img src="/MANEKI.gif" alt="" className={styles.gif} />
      </div>

      {/* SOLO: MIDNIGHT RTL (t=28) */}
      <div className={`${styles.corgi} ${styles.rtl}`} style={{ animationDelay: '28s' }}>
        <img src="/MIDNIGHT.gif" alt="" className={styles.gif} />
      </div>

      {/* SOLO: crab RTL (t=34) */}
      <div className={`${styles.corgi} ${styles.rtl}`} style={{ animationDelay: '34s' }}>
        <img src="/crab.gif" alt="" className={styles.gif} />
      </div>

    </div>
    {text && <p className={styles.loadingText}>{text}</p>}
  </div>
);

export default CorgiLoader;
