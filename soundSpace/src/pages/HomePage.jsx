import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div>
    <h1>soundSpace</h1>
    <Link to={'/login'}>Log In</Link>
    <Link to={'/signup/producer'}>Sign Up as a Producer</Link>
    <Link to={'/signup/record-label'}>Sign Up as a Record Label</Link>
    <Link to={'/producers'}>All Producers</Link>
    <Link to={'/record-labels'}>All Record Labels</Link>
    <Footer />
    </div>
  )
}

export default HomePage
