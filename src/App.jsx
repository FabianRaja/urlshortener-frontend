import { Route, Routes } from 'react-router-dom'
import './App.css'
import Externalpage from './Pages/Externalpage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import ForgotPage from './Pages/ForgotPage'
import ResetPage from './Pages/ResetPage'
import DashboardPage from './Pages/Dashboard'
import ShortUrlPage from './Pages/ShortUrlPage'
import ShortListPage from './Pages/ShortListPage'
import ActivationPage from './Pages/ActivationPage'
function App() {
  return (
    //Routes and Route is imported from react router dom to navigate between pages
    <Routes>
      <Route exact path='/' element={<DashboardPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/forgot' element={<ForgotPage/>}/>
      <Route path='/reset/:id' element={<ResetPage/>}/>
      <Route path='/shortUrl' element={<ShortUrlPage/>}/>
      <Route path='/urlList' element={<ShortListPage/>}/>
      <Route path='/activation/:id' element={<ActivationPage/>}/>
      <Route path='/new/:string' element={<Externalpage/>}/>
    </Routes>
  )
}

export default App
