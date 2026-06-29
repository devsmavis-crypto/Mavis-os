import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Login } from './Login'
import { AppShell } from './AppShell'
import { MavImob } from './MavImob'
import { auth } from '@/lib/auth'

/** Protege rotas que exigem login. */
function Protected({ children }: { children: JSX.Element }) {
  return auth.isLogged() ? children : <Navigate to="/login" replace />
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/app/*" element={<Protected><AppShell /></Protected>} />
        <Route path="/mav" element={<Protected><MavImob /></Protected>} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
