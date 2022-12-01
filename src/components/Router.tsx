import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { StudentCard } from '../pages/StudentCard'
import { NotFound } from './NotFound'
import { PrivateRoute } from './PrivateRoute'

export function Router() {
  if (window.location.href.at(-1) === '/') {
    window.location.href = '/login'
  }
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<DefaultLayout />}>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="student/:studentId"
          element={
            <PrivateRoute>
              <StudentCard />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  )
}
