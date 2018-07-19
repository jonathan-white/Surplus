import React from 'react';

const About = () => (
  <div>
    <div className="about-surplus">
      <h5>About Surplus Market</h5>
      <p>
        Surplus Market is a space for companies to conduct business to business transactions. Companies able to purchase and sell their overstocked inventory. This allows companies to save money year after year while building relationships through our site.
      </p>
    </div>
    <div className="about-founders">
      <h5>Our Founders</h5>
      <div className="foundersList">
        <div className="founder">
          {/* <img src="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/placeholder.png" alt="Jonathan White"/> */}
          <img src="images/jon.png" alt="Jonathan White"/>
          <div>
            <h2>Jonathan White</h2>
            <h6 className="indigo-text">Full-stack web developer</h6>
            <p>Jonathan's bio goes here...</p>
          </div>
        </div>
        <hr />
        <div className="founder">
          {/* <img src="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/placeholder.png" alt="Denny Reever"/> */}
          <img src="images/dennyela.png" alt="Denny Reever"/>
          <div>
            <h2>Dennyela Reever</h2>
            <h6 className="indigo-text">Full-stack web developer</h6>
            <p> Hi, my name is Dennyela. I live in Cleveland where I'm a Full-Stack Software Engineer. 
                In my spare time I love traveling, watching movies, listening to music, cooking, bloging, and to write software that benefits the entire web community.
                I created Liri Bot, Floof (dog addoption app), and worked with amazing indivisuals to build this lovely community for business to business deals. 
                I value honesty, respect, passion, and being genuine. I believe in making tomorrow a better place than today. 
            </p>
          </div>
        </div>
        <hr />
        <div className="founder">
          {/* <img src="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/placeholder.png" alt="Kevin Beeler"/> */}
          <img src="images/kevin.png" alt="Kevin Beeler"/>
          <div>
            <h2>Kevin Beeler</h2>
            <h6 className="indigo-text">Full-stack web developer</h6>
            <p> Kevin is a Graduate of the Case Western Reserve- Full Stack Boot Camp, he strides to grow his developing reputation in building creative, clean, practical applications.
                His web development focus is directed towards business, technology, and design. "My lifetime goal is to use technology to change the World."
                His journey in designing and developing websites, building interactive experiences and creating businesses began in 2016.
                Kevin devoted to modern and clean designs. An advocate of structure, purity and simplicity in both, design and code. Beautiful is better than ugly.
                Simple is better than complex. Complex is better than complicated. "I believe that every line of code and element in design has to have purpose or function. Organization and consistency are very important to me."</p>
          </div>
        </div>
        <hr />
        <div className="founder">
          {/* <img src="https://storage.googleapis.com/surplus-6507a.appspot.com/assets/placeholder.png" alt="Marton Kondray"/> */}
          <img src="images/marton.png" alt="Marton Kondray"/>
          <div>
            <h2>Marton Kondray</h2>
            <h6 className="indigo-text">Full-stack web developer</h6>
            <p>Marton's bio goes here...</p>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default About;
