import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LogIn from './pages/LogIn';
import SignUpP from './pages/SignUpP';
import SignUpRL from './pages/SignUpRL';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Review from './pages/Review';
import AllProducers from './pages/AllProducers';
import AllRecordLabels from './pages/AllRecordLabels';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/login' element={<LogIn />}/>
      <Route path='/signup-producer' element={<SignUpP />}/>
      <Route path='/signup-record-label' element={<SignUpRL />}/>
      <Route path='/profile/:id' element={<Profile />}/>
      <Route path='/profile/:id/edit' element={<EditProfile />}/>
      <Route path='/profile/review' element={<Review />}/>
      <Route path='/producers' element={<AllProducers />}/>
      <Route path='/record-labels' element={<AllRecordLabels />}/>
    </Routes>
  )
}

export default App
