import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/pacman.png'
import IMG2 from '../../assets/Trivia.png'
import IMG3 from '../../assets/dog.png'
import IMG4 from '../../assets/invention.png'
import IMG5 from '../../assets/Mern.png'
import IMG6 from '../../assets/siby.png'



const data = [
  {
    id: 6,
    image: IMG6,
    title: "Siby- Crime Mapping | React",
    github: "https://github.com/bd6981/SibyCrimeMapping",
    demo: "https://siby-crime-mapping.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "The Connections Keeper | Full MERN | User Auth",
    github: "https://github.com/shamzaali7/connection-frontend-api.git",
    demo: "http://connection-frontend-api.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Music Trivia Game | Vanilla JavaScript",
    github: "https://github.com/bd6981/Trivia-.git",
    demo: "https://bd6981.github.io/Trivia-/",
  },
  {
    id: 1,
    image: IMG1,
    title: "Pacman Game | React",
    github: "https://github.com/bd6981/pacman",
    demo: "https://pacman-gilt.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Dog-App-Implementing third-party Api Fetch/Filter | React",
    github: "https://github.com/bd6981/Name-Of-Your-Dog-App-Project.git",
    demo: "https://name-of-your-dog-app-project.vercel.app",
  },
  {
    id: 4,
    image: IMG4,
    title: "World of Invention -third party Api | React",
    github: "https://github.com/bd6981/invention.git",
    demo: "https://invention-mu.vercel.app/Home",
  },
];


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work:</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio