import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LogIn from './pages/LogIn';
import SignUpP from './pages/SignUpP';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import AllProducers from './pages/AllProducers';
import AllRecordLabels from './pages/AllRecordLabels';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/login' element={<LogIn />}/>
      <Route path='/signup' element={<SignUpP />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/profile/:id/edit' element={<EditProfile />}/>
      <Route path='/producers' element={<AllProducers />}/>
      <Route path='/record-labels' element={<AllRecordLabels />}/>
    </Routes>
  )
}

export default App