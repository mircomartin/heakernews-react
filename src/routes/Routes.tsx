import { Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import { Suspense, lazy } from 'react'

const TopStories = lazy(() => import('../pages/TopStories'))
const Detail = lazy(() => import('../pages/Detail'))

export const AppRoutes = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Routes>
          <Route path='/' element={<TopStories />} />
          <Route path='/article/:id' element={<Detail />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </Suspense>
    </>
  )
}
