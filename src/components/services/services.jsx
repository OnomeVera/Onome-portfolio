import React from 'react'
import './services.css'
import {BiCheck} from "react-icons/bi"

const services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        
        <article className='service'>
          <div className="service__head">
            <h3>  Web Development</h3>
          </div>

          <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Knowledge of HTML, CSS, JavaScript, PHP, and other relevant web design coding languages</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Create and test applications for websites</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Collaborate</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Work with graphics and other designers</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Present design specs</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Maintain and update websites</p>
          </li>

          <li>
            <BiCheck className='service__list-icon' />
            <p>Troubleshoot website problems</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Stay up-to-date on technology
</p>
          </li>
          </ul>
        </article>
        {/* END OF Web Development */}


        <article className='service'>
          <div className="service__head">
            <h3>IT Support</h3>
          </div>

          <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Installing and configuring computer hardware, software, systems, networks, printers, and scanners</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Monitoring and maintaining computer systems and networks</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Responding in a timely manner to service issues and requests</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Providing technical support across the company -this may be in person or over the phone</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Setting up accounts for new users</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Repairing and replacing equipment as necessary</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Testing new technology</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Possibly training junior staff</p>
          </li>
          </ul>
        </article>
        {/* END OF IT SUPPORT */}

        <article className='service'>
          <div className="service__head">
            <h3>Virtual Assistant</h3>
          </div>

          <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Respond to emails and phone calls</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Create presentations, as assigned</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Provide customer service as first point of contact</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Attend to both French and English speaking Clients</p>
          </li>
          
          </ul>
        </article>

      </div>
    </section>
  )
}

export default services