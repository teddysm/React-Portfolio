import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import React from 'react';

function Footer() {
  return (
    <footer style={{ margin: '40px' }}>
      <h4>Made by Thanh Doan with love</h4>
      <a href='https://github.com' target='_blank'>
        <FaGithub style={{ fontSize: '50px' }} />
      </a>
      <a href='https://linkedin.com' target='_blank'>
        <FaLinkedin style={{ fontSize: '50px' }} />
      </a>
    </footer>
  );
}

export default Footer;
