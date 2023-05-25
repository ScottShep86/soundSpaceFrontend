import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faInstagram, faDiscord, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className='footer'>
    <div className='footerLogo'>
    <Link style={{color: "white"}} to={"https://open.spotify.com/?"}><FontAwesomeIcon icon={faSpotify} /></Link>
    <Link style={{color: "white"}} to={"https://www.instagram.com/"}><FontAwesomeIcon icon={faInstagram} /></Link>
    <Link style={{color: "white"}} to={"https://discord.com/"}><FontAwesomeIcon icon={faDiscord} /> </Link>
    <Link style={{color: "white"}} to={"https://www.facebook.com/"}><FontAwesomeIcon icon={faFacebook} /></Link>
    <Link style={{color: "white"}} to={"https://twitter.com/"}><FontAwesomeIcon icon={faTwitter} /> </Link>
    </div>
    <p>©2023 - soundSpace - Olivier Dewulf - Rui Melo - Scott Shepherd</p>
    </div>
  )
}

export default Footer