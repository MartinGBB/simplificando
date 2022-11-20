import { Routes, Route } from 'react-router-dom'
import { LayoutContainer } from '../layouts/DefaultLayout/styles'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutContainer />}>
        <Route path="/" element={<h1>Home</h1>} />
      </Route>
    </Routes>
  )
}
