import React from "react";
// import GitHubCalendar from 'react-github-calendar';
import GitGraph from "./Graph.png";
import "./About.css";
import Skills from "./Skills.js";
import { TracingBeam } from "../../Components/ui/tracing-beam";

const About = (props) => {
  return (
    <TracingBeam>
      <section id="about">
        <div className="wrapper">
          <article>
            <div className="title">
              <h3>Who's this?</h3>
              <p className="separator" />
            </div>
            <div className="desc full">
              <h4 className="subtitle">My name is Shreya.</h4>
              <p>
                I am a Passionate web developer web designer ML enthusiast and AI
                enthusiast
              </p>
              <p>
                I really enjoy solving problems as well as making things pretty
                and easy to use. I can't stop learning new things; the more, the
                better. I also love to play chess.
              </p>
              <p>
                I love to code because if I can think it, I can make it a reality.
              </p>
            </div>
            <div className="title">
              <h3>What does she do?</h3>
              <p className="separator" />
            </div>
            <div className="desc">
              <h4 className="subtitle">I'm a programmer.</h4>
              <p>
                For the front-end I usually work with Javascript,or including
                popular frameworks like ReactJS and NextJS. I also make the web
                pretty by using CSS and, whenever needed, any of their friends:
                Bootstrap, tailwind, etc.
              </p>
              <p>
                For the back-end I also work with Javascript (NodeJS, Express,
                MongoDB, etc).
              </p>
            </div>
            <div className="desc">
              <h4 className="subtitle">Also a AI/ML enthusiast.</h4>
              <p>
                AI and ML drive my passion for innovation. I've built real-time language translation and NLP models, solving complex problems with intelligent solutions. From deep learning to AI deployment, I explore new possibilities, fine-tuning models and integrating AI into real-world applications.
              </p>
              <p>
                Beyond projects, I mentor aspiring AI enthusiasts, leading workshops and guiding students in ML concepts. As an AI/ML mentor, I contribute to tech events and foster a strong learning community.
              </p>
            </div>
          </article>

          <div>
            <div className="title">
              <h3>Tech Stack</h3>
              <p className="separator" />

              <div className="descTechS full">
                <div className="TechContainer">
                  <a href="https://www.mongodb.com" target="_blank">
                    <img
                      className="Techs"
                      src="https://skillicons.dev/icons?i=mongodb"
                      alt="Mongodb"
                    />
                  </a>
                  <a href="https://expressjs.com" target="_blank">
                    <img
                      className="Techs"
                      src="https://skillicons.dev/icons?i=express"
                      alt="Express js"
                    />
                  </a>
                  <a href="https://react.dev" target="_blank">
                    <img
                      className="Techs"
                      src="https://skillicons.dev/icons?i=react"
                      alt="React js"
                    />
                  </a>
                  <a href="https://nodejs.org/en" target="_blank">
                    <img
                      className="Techs"
                      src="https://skillicons.dev/icons?i=nodejs"
                      alt="Node js"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="title">
              <div className="SkillsMargin">
                <h3>Skills</h3>
              </div>
              <p className="separatorSkills" />
            </div>
            <Skills />
          </div>
        </div>
      </section>
    </TracingBeam>
  );
};

export default About;
