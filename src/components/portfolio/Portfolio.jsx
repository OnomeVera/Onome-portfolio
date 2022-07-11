import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.PNG'
import IMG2 from '../../assets/portfolio2b.PNG'
import IMG3 from '../../assets/portfolio3.PNG'
import IMG4 from '../../assets/portfolio4b.PNG'
import IMG5 from '../../assets/portfolio5.PNG'
import IMG6 from '../../assets/portfolio5b.PNG'


// Array method//
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Simple Web Page',
    github: 'https://github.com/OnomeVera/simple-web-page.git',
    demo: 'http://simple-web-page-silk.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Simple Calculator',
    github: 'https://github.com/OnomeVera/Simple-Calculator.git',
    demo: 'http://simple-calculator-tau-mauve.vercel.app/'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Infinite Image Gallery',
    github: 'https://github.com/OnomeVera/infinite-scroll-image-gallery.git',
    demo: 'http://infinite-scroll-image-gallery.vercel.app/'
  },

  {
    id: 4,
    image: IMG4,
    title: 'E-Product Page',
    github: 'https://github.com/OnomeVera/e-product-page.git',
    demo: 'http://e-product-page.vercel.app/'
  },

  {
    id: 5,
    image: IMG5,
    title: 'Survey Form',
    github: 'https://github.com/OnomeVera/survey-form.git',
    demo: 'http://survey-form-pink.vercel.app/'
  },

  {
    id: 6,
    image: IMG6,
    title: 'Responsive Image Gallery',
    github: 'https://github.com/OnomeVera/image-gallery.git',
    demo: 'http://image-gallery-brown.vercel.app/'
  },

  
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article> */}
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article className='portfolio__item'>
             <div className="portfolio__item-image">
             <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live demo</a>
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