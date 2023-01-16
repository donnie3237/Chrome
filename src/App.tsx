import type { Component } from 'solid-js';
import MainPage from './MainPAge/MainPage';
import './App.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'solid-toast';

const App: Component = () => {
  return (
    <div class="App">
      <MainPage/>
      <Toaster
        position='top-left'
      />
    </div>
  );
};

export default App;
