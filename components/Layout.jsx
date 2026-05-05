import { useState } from 'react';
import Titlebar from '../components/Titlebar';
import Sidebar from '../components/Sidebar';
import Explorer from '../components/Explorer';
import Bottombar from '../components/Bottombar';
import Tabsbar from './Tabsbar';
import FakeTerminal from './FakeTerminal';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  const [explorerOpen, setExplorerOpen] = useState(true);

  const handleToggleExplorer = () => {
    setExplorerOpen((prev) => !prev);
  };

  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar explorerOpen={explorerOpen} onToggleExplorer={handleToggleExplorer} />
        <Explorer isOpen={explorerOpen} />
        <div className={styles.pageWrapper}>
          <Tabsbar />
          <main className={styles.content}>{children}</main>
        </div>
      </div>
      <FakeTerminal />
      <Bottombar />
    </>
  );
};

export default Layout;
