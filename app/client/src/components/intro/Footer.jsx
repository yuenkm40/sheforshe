import React from 'react'
import './footer.scss'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-heading">
          <h1>Do you want to step in to the future before others</h1>
      </div>

      <div className="footer-btn">
          <p>Join the Community</p>
      </div>

      <div className="footer-links">
          <div className="footer-links-logo">
              <h1>SheforShe</h1>
              <p>Crechterwoord K12 182 DK Alknjkcb, All rights Reserved</p>
          </div>
          <div className="footer-links-div">
              <h3>Links</h3>
              <p>Overons</p>
              <p>Social Media</p>
              <p>Counters</p>
              <p>Contact</p>
          </div>
          <div className="footer-links-div">
              <h3>Company</h3>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Contact</p>
          </div>
          <div className="footer-links-div">
              <h3>Get in touch</h3>
              <p>Crechterwoord K12 182 DK Alknjkcb</p>
              <p>085-132567</p>
              <p>info@payme.net</p>
          </div>
      </div>
      <div className="footer-copyright">
          <p>@ 2022 SheforShe. All rights reserved.</p>
      </div>
    </div>
  )
}
