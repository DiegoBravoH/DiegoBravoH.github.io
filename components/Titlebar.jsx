import Image from 'next/image';
import styles from '../styles/Titlebar.module.css';

const Titlebar = () => {

  const handleBack = () => window.history.back();
  const handleForward = () => window.history.forward();

  return (
    <section className={styles.titlebar}>
      <Image
        src="/vscode_icon.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      />
      <div className={styles.items}>
        <p>File</p>
        <p>Edit</p>
        <p>Selection</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <div className={styles.navBar}>
        <button
          className={styles.navButton}
          onClick={handleBack}
          title="Go Back"
          aria-label="Go Back"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.854 3.646a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L4.707 8.5H13.5a.5.5 0 0 0 0-1H4.707l3.147-3.146a.5.5 0 0 0 0-.708z" />
          </svg>
        </button>
        <button
          className={styles.navButton}
          onClick={handleForward}
          title="Go Forward"
          aria-label="Go Forward"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.146 3.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8.5H2.5a.5.5 0 0 1 0-1h8.793L8.146 4.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
        <div className={styles.addressBar}>
          <span className={styles.addressText}>Diego Bravo - Portfolio</span>
        </div>
      </div>
      <div className={styles.windowButtons} aria-hidden="true">
        <span className={styles.minimize} tabIndex="-1">
          <svg width="10" height="1" viewBox="0 0 10 1" fill="currentColor">
            <rect width="10" height="1"/>
          </svg>
        </span>
        <span className={styles.maximize} tabIndex="-1">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="0.5" y="0.5" width="9" height="9"/>
          </svg>
        </span>
        <span className={styles.close} tabIndex="-1">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
            <line x1="0" y1="0" x2="10" y2="10" stroke="currentColor" strokeWidth="1.2"/>
            <line x1="10" y1="0" x2="0" y2="10" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Titlebar;
