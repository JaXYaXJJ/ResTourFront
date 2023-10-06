import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { DarkModeContextWrapper } from './contexts/DarkModeContext';
import { AuthContextProvider } from './contexts/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { TourContextProvider } from './contexts/TourContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new QueryClient()

root.render(
  // <React.StrictMode>
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <TourContextProvider>
        <AuthContextProvider>
          <DarkModeContextWrapper>
            <App />
          </DarkModeContextWrapper>
        </AuthContextProvider>
      </TourContextProvider>
    </BrowserRouter>
  </QueryClientProvider>
  // </React.StrictMode>
);

reportWebVitals();
