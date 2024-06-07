import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { TasksProvider } from './contexts/TasksContext.jsx';
import { DateProvider } from './contexts/DateContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TasksProvider>
        <DateProvider>
          <App />
        </DateProvider>
      </TasksProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
