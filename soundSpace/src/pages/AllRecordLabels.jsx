/* import React from 'react' */
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import UMG from '../assets/images/universal.png'
import Polydor from '../assets/images/polydor.png'
import Sony from '../assets/images/sony.png'
import Atlantic from '../assets/images/atlantic.png'
import Hansa from '../assets/images/hansa.jpg'
import Tresor from '../assets/images/tresor.jpg'

function AllRecordLabels() {

  return (
    //here is for the whole page
        <div> 
        <Navbar />
            <h1>All Record Labels</h1>
           {/*  here will contain all containers */}
            <div className="container"> 
            {/* //here is for every card */}
            <div className="card"> 
            <img src={UMG} alt="Universal Music Group" />
            <h2>Universal Music Group</h2>
            <h3>Santa Monica</h3>
        
            </div>
 
            {/* //here is for every card */}
            <div className="card"> 
            <img src={Polydor} alt="Polydor" />
            <h2>Polydor</h2>
            <h3>London</h3>
            </div>

            <div className="card"> 
            <img src={Sony} alt="Sony" />
            <h2>Sony Music</h2>
            <h3>New York</h3>
            </div>

            <div className="card"> 
            <img src={Atlantic} alt="Atlantic" />
            <h2>Atlantic Records</h2>
            <h3>New York</h3>
            </div>

            <div className="card"> 
            <img src={Hansa} alt="Hansa" />
            <h2>Hansa Records</h2>
            <h3>Berlin</h3>
            </div>

            <div className="card"> 
            <img src={Tresor} alt="Tresor" />
            <h2>Tresor Records</h2>
            <h3>Berlin</h3>
            </div>
            </div>
            <Footer />
        </div>
        )
}

export default AllRecordLabels