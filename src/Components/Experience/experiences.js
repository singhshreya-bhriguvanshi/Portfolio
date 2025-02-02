import React from 'react';
import './Experience.css'; // Make sure to create a separate CSS for experience section
// import ExperienceIcon1 from './Images/experience-icon1.png'; // Example icons for experience
// import ExperienceIcon2 from './Images/experience-icon2.png'; 
// import ExperienceIcon3 from './Images/experience-icon3.png'; 

const Experience = props => {
  return (
    <section id="experience">
      <div className="experience-container">
        <div className="heading">
          <h3 className="title">My Experience</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of the experiences and roles I've taken on.
          </p>
        </div>
        <div className="experience-wrapper">
          <div className="experience-item">
            <img src={ExperienceIcon1} alt="Role Icon 1" />
            <div className="experience-details">
              <h4>AI/ML Mentor</h4>
              <small>Department AI Club | 2024 - Present</small>
              <p>
                Led AI/ML mentoring sessions for students, providing guidance on real-world applications and projects. Organized large-scale events with over 600 participants, helping enhance the knowledge of over 200 students.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <img src={ExperienceIcon2} alt="Role Icon 2" />
            <div className="experience-details">
              <h4>Project Lead - SMS Spam Detector</h4>
              <small>Personal Project | 2024</small>
              <p>
                Led the development of an SMS spam detection system using BERT. Deployed the model and created a seamless interface using Python and Gradio to help users filter spam messages effectively.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <img src={ExperienceIcon3} alt="Role Icon 3" />
            <div className="experience-details">
              <h4>Event Manager</h4>
              <small>AI/ML Department Event | 2024</small>
              <p>
                Managed and coordinated all aspects of an AI/ML event attended by over 600 people. Took charge of speaker coordination, logistics, and planning to ensure smooth execution.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
