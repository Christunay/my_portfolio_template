import { NavLink } from 'react-router-dom';
// import PlaceholderImage from '../assets/My_Bio_Photo';
//import My_Bio_Photo from '../assets/My_Bio_Photo.JPG';



// Replace these variables with your information
const firstName = 'Christunay';
const jobTitle = 'Replace with your title';
const company = 'Replace with your company name';
const mainDuty = 'Replace with your main duty';
const jobLocation = 'Replace with your job location';
const briefJobDescription = 'Replace with a brief description of your job';
const careerObjective = 'I develop scalable, data-driven solutions to optimize logistics, operational efficiency, and last-mile delivery.';
const personalLife = 'Replace with a brief description of your personal life';

const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
        </section> 
        {/* Replace this placeholder image and alt tag with a professional headshot */}
          {/* <img className='headshot' src={My_Bio_Photo} alt="placeholder image" />
          </section> */}
         <img className='headshot' src="/images/My_Bio_Photo.JPG" alt="My Bio"  style={{width: '30%', // 
          height: 'auto', 
          borderRadius: '50%', 
          display: 'block',
          display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}  />
        {/* <img className='headshot' src="/images/My_Bio_Photo.jpg" alt="My Bio" /> */}

  
        <section className='description-container'>
          <h2 className='text-xl font-medium'>I&apos;m {firstName}, a {jobTitle} working for, {company} on {mainDuty} located in, {jobLocation}</h2>
          <p>{briefJobDescription}</p>
          <p>{careerObjective}</p>
          <p>{personalLife}</p>
          <p className='mb-4'>If you are interested in my work, reach out to me!</p>
          <NavLink to="/contact" className="contact-me-btn">Contact Me</NavLink>
        </section>
      </section>
    </main>
  )
}
 export default About;




//  import My_Bio_Photo from '../assets/My_Bio_Photo.jpg';
