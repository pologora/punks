import './App.css'
import Header from './components/header/Header'
import MyRoutes from './components/MyRoutes'
import useLocalStorage from 'use-local-storage'
import Footer from './components/pages/footer/Footer'
import TextConnect from './components/TextConnect'

function App() {
  

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')
  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  const connect = () => {}

  return (
    <div className='app' data-theme={theme}>
      <Header changeTheme={changeTheme} theme={theme} />
      <MyRoutes />
      <TextConnect />
      <Footer />
    </div>
  )
}

export default App
