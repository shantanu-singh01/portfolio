import React from "react";
import './FooterStyles.css';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color: "#fff", marginRight:'2rem' }} />
                        <div>
                            <p>149 Prithviraj Nagar, Durgapura</p>
                            <p>Jaipur, India.</p>
                        </div>
                    </div>
                    
                    <div className="phone">
                        <h4><FaPhone size={20} style={{color: "#fff", marginRight:'2rem' }} />+91-9314062424</h4>
                    </div>
                    <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight:'2rem' }} />singhshantanu083@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About me</h4>
                    <p>This is me Shantanu Singh. A Software Engineer & Web Developer.
                       I enjoy developing pixel perfect user interfaces & intuitive user experience.
                    </p>
                    <div className="social">
                    <a href="https://www.facebook.com/3minem00"><FaFacebook size={30} style={{color: "#fff", marginRight:'1rem' }} /></a>
                    <a href="https://www.linkedin.com/in/shantanu-singh01/"><FaLinkedin size={30} style={{color: "#fff", marginRight:'1rem' }} /></a>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;