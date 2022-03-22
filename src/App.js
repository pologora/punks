import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import MyRoutes from './components/MyRoutes';

function App() {
  return (
    <div className='app'>
      <Header />
      <MyRoutes/>
    </div>
  );
}

export default App;
