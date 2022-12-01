import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { StudentCard } from '../pages/StudentCard'
import { PrivateRoute } from './PrivateRoute'

export function Router() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />

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
