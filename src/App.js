import './App.css';
import Header from './components/header/Header';
import MyRoutes from './components/MyRoutes';
import useLocalStorage from 'use-local-storage';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );
  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className='app' data-theme={theme}>
      <Header changeTheme={changeTheme} theme={theme} />
      <MyRoutes />
    </div>
  );
}

export default App;
