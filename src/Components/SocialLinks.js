import React from 'react';

const SocialLinks = props => {
  return (
    <div className="social">
      
      <a
        id="profile-link"
        href="https://github.com/singhshreya-bhriguvanshi"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's GitHub Profile"
      >
        {' '}
        <i className="fab fa-github" />
      </a>
      <a
        id="profile-link"
        href="https://www.linkedin.com/in/shreya-singh-bhriguvanshi/"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Linkedin Profile"
      >
        {' '}
        <i className="fab fa-linkedin" />
      </a>
    </div>
  );
};

export default SocialLinks;