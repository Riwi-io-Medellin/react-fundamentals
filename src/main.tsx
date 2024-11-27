import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router'
import Navigation from './navigation/navigation.tsx'
import { router } from './routes/routes.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Navigation/> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
