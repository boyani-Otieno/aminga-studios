import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './team.css';
import img from '../../../assets/images/20.jpeg';
import im3 from '../../../assets/images/14.jpeg';
import im4 from '../../../assets/images/27.jpeg';

function Team() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className='me'>
      <div data-aos="fade-right" className="about-column">
        <div className='about-img'>
          <img src={img} alt="about us" />
        </div>
      </div>

      <div data-aos="fade-left" className="about-column">
        <div className='about-content'>
          <h3>Vincent Onditi</h3>
          <p>Our team is lead by Vincent Onditi. I’ve perfected
          mine <br />so you can focus on yours. Get in touch
          to find <br />out how I can help.
          Because I'm experienced, reliable,
          and focused on results, I've had the
          privilege of working with a host of fantastic clients.
          Because I'm experienced, reliable,
          and focused on results, I've had the Because I'm experienced, reliable,
          and focused on results, I've had the Because I'm experienced, reliable,
          and focused on results, I've had the
          privilege of working with a host of fantastic clients.
          privilege of working with a host of fantastic clients.
          privilege of working with a host of fantastic clients.
          Because I'm experienced, reliable,
          and focused on results, I've had the
          privilege of working with a host of fantastic clients.
          </p>
        </div>
      </div>

      <div data-aos="fade-left" className="about-column">
        <div className='about-content'>
          <p><h3>Model Designs</h3>
          My business is more than just a job.
          Each time I take on a new project,
          I make sure it aligns with my core
          set of values so I know I can deliver great results.
          My curiosity makes me love learning, and added with my
          perfectionism, I am able to come up with quality work.
          Because I'm experienced, reliable,
          and focused on results, I've had the
          privilege of working with a host of fantastic clients.
          </p>
        </div>
      </div>

      <div data-aos="fade-right" className="about-column">
        <div className='about-img'>
          <img src={im3} alt="about us" />
        </div>
      </div>

      <div data-aos="fade-right" className="about-column">
        <div className='about-img-prudence'>
          <img src={im4} alt="about us" />
        </div>
      </div>

      <div data-aos="fade-left" className="about-column">
        <div className='about-content'>
          <p>
          <h3>Architectural Models</h3>
          Architectural models are the most useful method you can take advantage 
          of if you want to make people use all their senses in the process of 
          discovering the buildings that are yet to be built. They’re a tangible 
          piece of reality- one that we can interact with as we wish, depending on 
          our level of curiosity and interest. At Blueprint Architecture, we create 
          architectural models for real estate agents and brokers who want to sell 
          properties better and faster.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
