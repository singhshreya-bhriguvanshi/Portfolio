import React from 'react';

const Experience = (props) => {
  const icons = {
    python: 'fab fa-python',
    react: 'fab fa-react',
    node: 'fab fa-node',
    java: 'fab fa-java',
    html: 'fab fa-html5',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    mysql: 'fa-solid fa-database',
    aws: 'fab fa-aws',
    docker: 'fab fa-docker',
  };

  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return (
    <div className="experience-item">
      <div className="experience-details">
        <div className="experience-title">
          <p className="icons">
            {props.tech.split(' ').map((t) => (
              <i className={icons[t]} key={t} />
            ))}
          </p>
          {props.title} - {props.company}
        </div>
        <div className="experience-duration">
          <small>{props.duration}</small>
        </div>
        {props.children}
        <div className="buttons">
          {props.link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Role <i className="fas fa-external-link-alt" />
            </a>
          )}
          {props.repo && (
            <a href={repo} target="_blank" rel="noopener noreferrer">
              View Source <i className="fas fa-external-link-alt" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
