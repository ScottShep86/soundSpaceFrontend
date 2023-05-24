import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import HomepageImg from '../assets/images/denisse-leon-OVEWbIgffDk-unsplash.jpg'
import ProducersPage from '../assets/images/andreas-forsberg-rMdOHpO3h5E-unsplash.jpg'
import RecordLabels from '../assets/images/blocks-T3mKJXfdims-unsplash.jpg'
import Band from '../assets/images/rocco-dipoppa-_uDj_lyPVpA-unsplash.jpg'
import Stage from '../assets/images/magnus-lunay-LHR6tUw8N34-unsplash.jpg'

function HomePage() {
  return (
    <div>
    <h1>soundSpace</h1>
    <img className='background' src={HomepageImg} alt='soundSpace Image'/>
    
    <div className='btnLinks'>
      <Link className='btn' to={'/login'}>LOGIN</Link>
      <Link className='btn' to={'/signup'}>SIGNUP</Link>
    </div>
    <div className='aboutUs'>
    <p>soundSpace is an innovative online platform designed to bring together individuals in the music industry, fostering a vibrant community that thrives on collaboration and connection.</p>
    <br></br>
    <p>Our platform serves as a dynamic hub where music professionals can easily post job opportunities, opening up avenues for talent discovery and career advancement.</p>
    <br></br>
    <p>With soundSpace, users can engage in meaningful discussions, share insights, and build valuable relationships with like-minded individuals, creating a supportive network within the music community.</p>
    <br></br>
    <p>We provide a user-friendly interface that enables seamless communication, empowering musicians, producers, and industry experts to collaborate on projects, exchange ideas, and unlock new opportunities.</p>
    <br></br>
    <p>Whether you are a seasoned professional or an emerging talent, soundSpace offers a dynamic space where you can showcase your skills, discover new talent, and forge connections that elevate your music career to new heights.</p>
    </div>
    <div className='homepageLinks'>
    <div className='linksCard'>
    <h2>All Producers</h2>
    <Link to={'/api/producers'}><img className='linkImg' src={ProducersPage} alt='soundSpace Image'/></Link>
    </div>
    <div className='linksCard'>
    <h2>All Record Labels</h2>
    <Link to={'/record-labels'}><img className='linkImg' src={RecordLabels} alt='soundSpace Image'/></Link>
    </div>
    <div className='linksCard'>
    <h2>All Musicians</h2>
    <Link to={'/musicians'}><img className='linkImg' src={Band} alt='soundSpace Image'/></Link>
    </div>
    <div className='linksCard'>
    <h2>All StageCrew</h2>
    <Link to={'/stage-crew'}><img className='linkImg' src={Stage} alt='soundSpace Image'/></Link>
    </div>
    </div>
    <Footer />
    </div>
  )
}

export default HomePage
