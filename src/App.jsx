import './App.css'
import AboutImg from '../src/assets/subscribe-bg.png'
import Video from '../src/assets/Israel-Houghton-Reckless-Love-g6.mp3'
import Video1 from '../src/assets/Jesus_Image_Worship_-_Yeshua_CeeNaija.com_.mp3'
import Video2 from '../src/assets/Elevation_Worship_-_Been_So_Good_CeeNaija.com_.mp3'

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faApple, faGooglePlay, faAmazon, faSoundcloud, faFacebookF, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <>
      {/* hero section */}
      <section className='hero lg:pl-[7em]'>
        <div className='bg-[rgba(0, 0, 0, 0.65)] p-8'>
          <h2 className='lg:text-[5em] font-bold text-4xl mb-5'>Martins Ifeanyi</h2>
          <h4 className='lg:text-3xl mb-10 text-[30px]'>Welcome to Martins Gospel Song</h4>
          <button className='text-black'>Book your order</button>
        </div>
      </section>
      {/* hero section ending */}

      {/* about section */}
      <section className='lg:flex lg:px-[5em] my-[4em] items-center gap-11'>
        <div className="textInfo px-5">
          <h2 className='text-4xl my-10'>About Martins</h2>
          <h5 className='text-2xl leading-10 font-[300] mb-6'>
            <i>
              My life revolves around the sovereignty of Jesus and His ultimate authority over all creation. I am deeply moved by His sacrificial love, which redeems the souls of humanity. I have encountered His presence in the darkest valleys and in the depths of life trials. Through the fiercest challenges, His grace has refined me. Even on life highest peaks, His constancy remains unshaken. He is my everything. My life is dedicated to honoring Him. I cannot afford to let Him down. Each day is a gift, and I strive to live it fully, with unwavering commitment.
            </i>
          </h5>
          <button className='bg-black text-white'>Learn More</button>
        </div>
        <img src={AboutImg} className='lg:block hidden lg:w-[50%] h-[400px]' alt="About Martins" />
      </section>
      {/* about section ending */}

      {/* albums section */}
      <section className='h-[100vh] albums flex items-center justify-center flex-col px-4 p-[30px]'>
        <h2 className='lg:text-5xl text-2xl text-center  mb-10 font-bold'>
          Get all albums and songs on BoomPlay, <br className='lg:block hidden ' /> Google Play, and Audiomack
        </h2>
        <ul className='flex gap-4 items-center lg:gap-10 mb-10 px-8'>
          <li><a href="#" 
           className="text-white text-1xl"
          aria-label="Spotify"><FontAwesomeIcon icon={faSpotify} size="2x" /></a></li>
          <li><a href="#"
           className="text-white text-1xl"
          aria-label="Apple Music"><FontAwesomeIcon icon={faApple} size="2x" /></a></li>
          <li><a href="#"
           className="text-white text-1xl"
          aria-label="Google Play Music"><FontAwesomeIcon icon={faGooglePlay} size="2x" /></a></li>
          <li><a href="#"
           className="text-white text-2xl"
          aria-label="Amazon Music"><FontAwesomeIcon icon={faAmazon} size="2x" /></a></li>
          <li><a href="#" 
          className="text-white text-2xl"
          aria-label="SoundCloud"><FontAwesomeIcon icon={faSoundcloud} size="2x" /></a></li>
        </ul>
        <div className='lg:grid grid-cols-2 my-10 gap-1 h-[50vh] flex flex-col overflow-y-scroll p-6 rounded-3xl' style={{background: 'rgba(255 , 255 , 255 , 0.48)'}}>
          <audio controls >
            <source src={Video} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <audio controls>
            <source src={Video1} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <audio controls>
            <source src={Video2} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <audio controls>
            <source src={Video} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <audio controls>
            <source src={Video} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <audio controls>
            <source src={Video1} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <audio controls>
            <source src={Video2} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <audio controls>
            <source src={Video} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <audio controls>
            <source src={Video2} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <audio controls>
            <source src={Video} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <audio controls>
            <source src={Video} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <audio controls>
            <source src={Video1} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <audio controls>
            <source src={Video2} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <audio controls>
            <source src={Video} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </section>
      {/* albums section ending */}

      {/* testimonials section */}
      <section className='bg-gray-100 py-16'>
        <div className='container mx-auto text-center'>
          <h2 className='text-4xl font-semibold mb-8'>What People Are Saying</h2>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <p className='text-lg italic'>
                Martins music has been a source of inspiration and strength. His songs bring hope and joy into my life.
              </p>
              <h4 className='mt-4 font-semibold'>- Sarah A.</h4>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <p className='text-lg italic'>
                Listening to Martins sing is like being transported to a place of peace and worship.
              </p>
              <h4 className='mt-4 font-semibold'>- John D.</h4>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <p className='text-lg italic'>
                His music has a way of touching the soul and reminding you of God love and grace.
              </p>
              <h4 className='mt-4 font-semibold'>- Emily R.</h4>
            </div>
          </div>
        </div>
      </section>
      {/* testimonials section ending */}

      {/* contact section */}
      <section className='py-16 bg-gray-800 text-white'>
        <div className='container mx-auto text-center'>
          <h2 className='text-4xl font-semibold mb-8'>Contact Us</h2>
          <p className='mb-8 text-2xl'>We would love to hear from you! Whether its a question, comment, <br /> or prayer request, please feel free to reach out to us.</p>
          <form className='max-w-lg mx-auto px-4'>
            <div className='mb-4'>
              <input type='text' placeholder='Your Name' className='w-full p-3 rounded-lg bg-gray-700 text-white' />
            </div>
            <div className='mb-4'>
              <input type='email' placeholder='Your Email' className='w-full p-3 rounded-lg bg-gray-700 text-white' />
            </div>
            <div className='mb-4'>
              <textarea placeholder='Your Message' className='w-full p-3 rounded-lg bg-gray-700 text-white h-32'></textarea>
            </div>
            <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg'>Send Message</button>
          </form>
        </div>
      </section>
      {/* contact section ending */}

      {/* footer section */}
      <footer className='bg-gray-800 text-white py-12 lg:px-[8em] px-[1em]'>
        <div className="container mb-10">
          <h3 className="text-3xl font-semibold mb-4">Get In Touch</h3>
          <p>
            Contact us to find out how we can help you. If it’s easier, you can email
            us at <br /> <a href="
mailto:hello@martinsgospel.com" className="underline">hello@martinsgospel.com</a>
          </p>
        </div>
        <div className='lg:flex justify-between items-center'>
          <div>
            <p className='text-sm'>
              &copy; 2024 Martins Gospel Entertainment. ALL Rights Reserved.
            </p>
            <div className="mt-2 text-sm">
              <a href="#" className="mr-4 underline">Privacy</a>
              <a href="#" className="underline">Terms of Services</a>
            </div>
          </div>
          <div>
            <ul className='flex gap-4'>
              <li><a href="#" 
               className="text-white text-2xl"
               aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li><a href="#" 
               className="text-white text-2xl"
               aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="#" 
               className="text-white text-2xl"
               aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><a href="#" 
               className="text-white text-2xl"
               aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a></li>
              <li><a href="#"  className="text-white text-2xl" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            </ul>
          </div>
        </div>
      </footer>
      {/* footer section ending */}
    </>
  )
}

export default App
