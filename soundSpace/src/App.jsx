import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LogIn from './pages/LogIn';
import SignUpP from './pages/SignUpP';
import Profile from './pages/Profile';
/* import EditProfile from './pages/EditProfile'; */
import AllProducers from './pages/AllProducers';
import AllRecordLabels from './pages/AllRecordLabels';
import AllMusicians from './pages/AllMusicians';
import StageCrew from './pages/StageCrew'
import JobListings from './pages/JobListings';
import CreateJob from './pages/CreateJob';
import EditJob from './pages/EditJob';
import OneJob from './pages/OneJob';
import IsPrivate from './components/IsPrivate';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/login' element={<LogIn />}/>
      <Route path='/signup' element={<SignUpP />}/>
      <Route path='/profile' element={<Profile />}/>
      {/* <Route path='/profile/:id/edit' element={<EditProfile />}/> */}
      <Route path='/producers' element={<AllProducers />}/>
      <Route path='/record-labels' element={<AllRecordLabels />}/>
      <Route path='/musicians' element={<AllMusicians />}/>
      <Route path='/stage-crew' element={<StageCrew />}/>
      <Route path='/jobs/create' element={<CreateJob/>} />
      <Route path='/profile/:id/edit' element={<EditJob/>}/>
      <Route path='/jobs' element={<JobListings />}/>
      <Route path='/jobs/:jobId' element={<IsPrivate><OneJob /></IsPrivate>}/>
    </Routes>
  )
}

export default App
