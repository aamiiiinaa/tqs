import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
      <nav className="grid grid-flow-col gap-4">
            <a href="#home" className="link link-hover">Home</a>
            <a href="#about-us" className="link link-hover">About us</a>
            <a href="#contact" className="link link-hover">Contact</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.instagram.com/the.quran.class_?igsh=MTkwdXQ2eXI4MjEycQ==" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.facebook.com/thequranclass" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://x.com/TheQuranClass?t=HD3tdGbWRxka7dA-OhQgmg&s=08" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.tiktok.com/@thequranclass?_t=8ngIpkEWHC5&_r=1" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} size="2x" />
            </a>
            <a href="https://wa.me/94725106723" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All rights reserved by The Quran Class</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;

