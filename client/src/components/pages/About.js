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
          <img src="images/jon.png" width="200" alt="Jonathan White"/>
          <div>
            <h2>Jonathan White</h2>
            <h6 className="indigo-text">Full-stack web developer</h6>
            <p>Jonathan is a freelance Full-Stack web developer with a passion for building applications that help make mundane tasks more efficient and meaningful.</p>
            <p>He has been a part of the teams that have created the 
              <a href="https://jonathan-white.github.io/Mindful/" target="_blank" rel="noopener noreferrer"> Mindful</a> and 
              <a href="https://drymemes.herokuapp.com/" target="_blank" rel="noopener noreferrer">Dry Memes</a> apps.</p> 
          </div>
        </div>
        <hr />
        <div className="founder">
          <img src="images/dennyela.png" width="200" alt="Denny Reever"/>
          <div>
            <h2>Dennyela Reever</h2>
            <h6 className="indigo-text">Full-stack web developer</h6>
            <p> Hi, my name is Dennyela. I live in Cleveland where I'm a Full-Stack Software Engineer. 
                In my spare time I love traveling, watching movies, listening to music, cooking, bloging, and to write software that benefits the entire web community.
                I created Liri Bot, Floof (dog addoption app), and worked with amazing individuals to build this lovely community for business to business deals. 
                I value honesty, respect, passion, and being genuine. I believe in making tomorrow a better place than today. 
            </p>
          </div>
        </div>
        <hr />
        <div className="founder">
          <img src="images/kevin.png" width="200" alt="Kevin Beeler"/>
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
          <img src="images/marton.png" width="200" alt="Marton Kondray"/>
          <div>
            <h2>Marton Kondray</h2>
            <h6 className="indigo-text">Full-stack web developer</h6>
            <p>Marton is a full-stack web developer and graduate of the Case Western Reserve Full Stack Coding Boot Camp.  He has worked on several projects using Express or similar back-end Node.js web application frameworks.  His skills include knowledge of HTTP standards, API best practices, REST, web security and authentication, and basics of building scalable solutions.</p>
            <p>In his free time, Marton enjoys camping, canoeing, and going to Cleveland Indians games.  You can often spot him shooting photography and videography in the Cleveland Metroparks.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default About;
