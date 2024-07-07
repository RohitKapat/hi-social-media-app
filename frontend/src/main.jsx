import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
}
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className=' h-full w-full'>
    <BrowserRouter>
      <QueryClientProvider client = {queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </div>
 
  </React.StrictMode>,
)
