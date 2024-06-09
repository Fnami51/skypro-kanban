import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { TasksProvider } from './contexts/TasksContext.jsx';
import { UserProvider } from './contexts/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TasksProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </TasksProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
