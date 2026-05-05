import ThemeInfo from '../components/ThemeInfo';
import styles from '../styles/SettingsPage.module.css';

const SettingsPage = () => {
  return (
    <>
      <h2>Manage Themes</h2>
      <div className={styles.container}>
        <ThemeInfo
          name="Dracula"
          icon="/dracula.png"
          publisher="Dracula Theme"
          theme="dracula"
          description="Official Dracula Theme. A dark theme for many editors, shells, and more."
        />
        <ThemeInfo
          name="GitHub Dark"
          icon="/github-dark.png"
          publisher="GitHub"
          theme="github-dark"
          description="GitHub theme for VS Code"
        />
        <ThemeInfo
          name="Ayu Dark"
          icon="/ayu.png"
          publisher="teabyii"
          theme="ayu-dark"
          description="A simple theme with bright colors."
        />
        <ThemeInfo
          name="Nord"
          icon="/nord.png"
          publisher="arcticicestudio"
          theme="nord"
          description="An arctic, north-bluish clean and elegant Visual Studio Code theme."
        />
        <ThemeInfo
          name="Catppuccin Mocha"
          icon="/catppuccin-mocha.svg"
          publisher="Catppuccin"
          theme="catppuccin-mocha"
          description="Soothing pastel theme for the high-spirited!"
        />
        <ThemeInfo
          name="Tokyo Night"
          icon="/tokyo-night.svg"
          publisher="enkia"
          theme="tokyo-night"
          description="A clean, dark theme that celebrates the lights of downtown Tokyo at night."
        />
        <ThemeInfo
          name="One Dark Pro"
          icon="/one-dark-pro.svg"
          publisher="binaryify"
          theme="one-dark-pro"
          description="Elegant theme inspired by Atom's iconic One Dark, the most downloaded VS Code theme."
        />
        <ThemeInfo
          name="Rosé Pine"
          icon="/rose-pine.svg"
          publisher="Rosé Pine"
          theme="rose-pine"
          description="All natural pine, faux fur and a bit of soho vibes for the classy minimalist."
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Settings' },
  };
}

export default SettingsPage;
