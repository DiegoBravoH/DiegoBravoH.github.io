import Link from 'next/link';
import { useRouter } from 'next/router';
import FilesIcon from './icons/FilesIcon';
import GithubIcon from './icons/GithubIcon';
import CodeIcon from './icons/CodeIcon';
import PencilIcon from './icons/PencilIcon';
import MailIcon from './icons/MailIcon';
import AccountIcon from './icons/AccountIcon';
import SettingsIcon from './icons/SettingsIcon';
import styles from '../styles/Sidebar.module.css';

const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: '/',
    label: 'Home',
  },
  {
    Icon: GithubIcon,
    path: '/github',
    label: 'GitHub',
  },
  {
    Icon: CodeIcon,
    path: '/projects',
    label: 'Projects',
  },
  {
    Icon: PencilIcon,
    path: '/papers',
    label: 'Papers',
  },
  {
    Icon: MailIcon,
    path: '/contact',
    label: 'Contact',
  },
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: '/resume',
    label: 'Resume',
  },
  {
    Icon: SettingsIcon,
    path: '/settings',
    label: 'Settings',
  },
];

const Sidebar = ({ explorerOpen, onToggleExplorer }) => {
  const router = useRouter();

  const handleTopItemClick = (e, path) => {
    if (router.pathname === path) {
      e.preventDefault();
      onToggleExplorer();
    }
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path, label }) => {
          const isActive = router.pathname === path;
          const isVisible = isActive && explorerOpen;
          return (
            <Link href={path} key={path}>
              <div
                aria-label={label}
                className={`${styles.iconContainer} ${isVisible ? styles.active : ''}`}
                onClick={(e) => handleTopItemClick(e, path)}
              >
                <Icon
                  className={`${styles.icon} ${isActive ? styles.iconActive : styles.iconInactive}`}
                />
              </div>
            </Link>
          );
        })}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path, label }) => (
          <Link href={path} key={path}>
            <div
              aria-label={label}
              className={`${styles.iconContainer} ${router.pathname === path ? styles.active : ''}`}
            >
              <Icon
                className={`${styles.icon} ${router.pathname === path ? styles.iconActive : styles.iconInactive}`}
              />
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
