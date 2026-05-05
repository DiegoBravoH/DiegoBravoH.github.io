import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect, useCallback, useRef } from 'react';
import styles from '../styles/Titlebar.module.css';
import { useTerminal } from '../context/TerminalContext';

const WINDOW_MESSAGES = {
  minimize: "I don't minimize problems, I model them.",
  maximize: "Always chasing the global maximum, not local ones.",
  close:    "Close? The training hasn't converged yet.",
};

const MENU_MESSAGES = {
  file:      "Loading checkpoint... weights not found. Start from scratch?",
  edit:      "Careful — tweaking hyperparameters without a plan is just chaos.",
  selection: "Feature selection: drop the noise, keep the signal.",
  view:      "Have you tried TensorBoard? It won't fix your loss, but it looks great.",
  go:        "Epoch 1 of ∞. Let it run.",
  run:       "python train.py --hope --fingers-crossed --no-cuda",
  help:      "Stack Overflow closed your question. The model still doesn't converge.",
};

// Same order as Explorer.jsx
const ROUTES = [
  { path: '/',         label: 'home.jsx' },
  { path: '/resume',   label: 'resume.html' },
  { path: '/contact',  label: 'contact.yml' },
  { path: '/projects', label: 'projects.py' },
  { path: '/papers',   label: 'papers.json' },
  { path: '/github',   label: 'github.md' },
];

const Titlebar = () => {
  const router = useRouter();
  const { toggleTerminal } = useTerminal();

  const routerIndex = ROUTES.findIndex((r) => r.path === router.pathname);

  // Local state for optimistic updates — fixes race condition on rapid clicks
  const [activeIndex, setActiveIndex] = useState(routerIndex !== -1 ? routerIndex : 0);

  // Sync with router when navigating via sidebar, explorer, or direct URL
  useEffect(() => {
    if (routerIndex !== -1) setActiveIndex(routerIndex);
  }, [routerIndex]);

  // Prefetch neighbours so navigation feels instant
  useEffect(() => {
    const prev = (activeIndex - 1 + ROUTES.length) % ROUTES.length;
    const next = (activeIndex + 1) % ROUTES.length;
    router.prefetch(ROUTES[prev].path);
    router.prefetch(ROUTES[next].path);
  }, [activeIndex, router]);

  const handleBack = useCallback(() => {
    const prevIndex = (activeIndex - 1 + ROUTES.length) % ROUTES.length;
    setActiveIndex(prevIndex);
    router.push(ROUTES[prevIndex].path);
  }, [activeIndex, router]);

  const handleForward = useCallback(() => {
    const nextIndex = (activeIndex + 1) % ROUTES.length;
    setActiveIndex(nextIndex);
    router.push(ROUTES[nextIndex].path);
  }, [activeIndex, router]);

  const currentLabel = ROUTES[activeIndex]?.label ?? 'Diego Bravo - Portfolio';

  // Window button messages
  const [msgState, setMsgState] = useState(null); // { key, count }
  const msgTimer = useRef(null);

  const showWindowMessage = useCallback((key) => {
    clearTimeout(msgTimer.current);
    setMsgState((prev) => ({ key, count: (prev?.count ?? 0) + 1 }));
    msgTimer.current = setTimeout(() => setMsgState(null), 3200);
  }, []);

  useEffect(() => () => clearTimeout(msgTimer.current), []);

  // Menu item messages
  const [menuMsgState, setMenuMsgState] = useState(null); // { key, count }
  const menuMsgTimer = useRef(null);

  const showMenuMessage = useCallback((key) => {
    clearTimeout(menuMsgTimer.current);
    setMenuMsgState((prev) => ({ key, count: (prev?.count ?? 0) + 1 }));
    menuMsgTimer.current = setTimeout(() => setMenuMsgState(null), 3200);
  }, []);

  useEffect(() => () => clearTimeout(menuMsgTimer.current), []);

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
        {menuMsgState && (
          <div key={menuMsgState.count} className={styles.menuMessage}>
            {MENU_MESSAGES[menuMsgState.key]}
          </div>
        )}
        <p
          role="button"
          tabIndex="0"
          aria-label="File"
          onClick={() => showMenuMessage('file')}
          onKeyDown={(e) => e.key === 'Enter' && showMenuMessage('file')}
        >File</p>
        <p
          role="button"
          tabIndex="0"
          aria-label="Edit"
          onClick={() => showMenuMessage('edit')}
          onKeyDown={(e) => e.key === 'Enter' && showMenuMessage('edit')}
        >Edit</p>
        <p
          role="button"
          tabIndex="0"
          aria-label="Selection"
          onClick={() => showMenuMessage('selection')}
          onKeyDown={(e) => e.key === 'Enter' && showMenuMessage('selection')}
        >Selection</p>
        <p
          role="button"
          tabIndex="0"
          aria-label="View"
          onClick={() => showMenuMessage('view')}
          onKeyDown={(e) => e.key === 'Enter' && showMenuMessage('view')}
        >View</p>
        <p
          role="button"
          tabIndex="0"
          aria-label="Go"
          onClick={() => showMenuMessage('go')}
          onKeyDown={(e) => e.key === 'Enter' && showMenuMessage('go')}
        >Go</p>
        <p
          role="button"
          tabIndex="0"
          aria-label="Run"
          onClick={() => showMenuMessage('run')}
          onKeyDown={(e) => e.key === 'Enter' && showMenuMessage('run')}
        >Run</p>
        <p
          role="button"
          tabIndex="0"
          aria-label="Terminal"
          onClick={toggleTerminal}
          onKeyDown={(e) => e.key === 'Enter' && toggleTerminal()}
        >Terminal</p>
        <p
          role="button"
          tabIndex="0"
          aria-label="Help"
          onClick={() => showMenuMessage('help')}
          onKeyDown={(e) => e.key === 'Enter' && showMenuMessage('help')}
        >Help</p>
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
          <span className={styles.addressText}>{currentLabel}</span>
        </div>
      </div>
      <div className={styles.windowButtons}>
        {msgState && (
          <div key={msgState.count} className={styles.windowMessage}>
            {WINDOW_MESSAGES[msgState.key]}
          </div>
        )}
        <span
          className={styles.minimize}
          role="button"
          tabIndex="0"
          aria-label="Minimize"
          onClick={() => showWindowMessage('minimize')}
          onKeyDown={(e) => e.key === 'Enter' && showWindowMessage('minimize')}
        >
          <svg width="10" height="1" viewBox="0 0 10 1" fill="currentColor">
            <rect width="10" height="1"/>
          </svg>
        </span>
        <span
          className={styles.maximize}
          role="button"
          tabIndex="0"
          aria-label="Maximize"
          onClick={() => showWindowMessage('maximize')}
          onKeyDown={(e) => e.key === 'Enter' && showWindowMessage('maximize')}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="0.5" y="0.5" width="9" height="9"/>
          </svg>
        </span>
        <span
          className={styles.close}
          role="button"
          tabIndex="0"
          aria-label="Close"
          onClick={() => showWindowMessage('close')}
          onKeyDown={(e) => e.key === 'Enter' && showWindowMessage('close')}
        >
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
