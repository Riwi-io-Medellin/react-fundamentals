import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import { RouterProvider} from 'react-router'
import { router } from './routes/routes.ts'
import './App.css'
import { AuthProvider } from './context/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
