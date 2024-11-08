import React from 'react';
import './Landing.css';
import rocket from '../assets/rocket.png'

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="left-section">
        <h2>Digital Marketing Stories Agency</h2>
        <p>The text or description about your agency goes here. This could be a brief overview of your services or a catchy tagline.</p>
        <button>Explore Our Services</button>
      </div>
      <div className="right-section">
        <div className="circle">
          <img src={rocket} alt="Agency representation" />
          {/* <div class="tenor-gif-embed" data-postid="4761553572339021146" data-share-method="host" data-aspect-ratio="1.08808" data-width="100%"><a href="https://tenor.com/view/rocket-gif-4761553572339021146">Rocket Sticker</a>from <a href="https://tenor.com/search/rocket-stickers">Rocket Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script> */}
        </div>
      </div>
    </div>
  );
};

export default Landing;
