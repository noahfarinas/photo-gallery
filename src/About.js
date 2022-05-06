import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="page-container">
      <div className="about-view">
        <img
          className="selfie-photo"
          src="./photo-gallery/photos/Me2.jpg"
          alt=""
        />
        <div className="about-body">
          <h1>I like dad jokes and Mexican food!</h1>
          <p>
            Sup! My name is Noah, I’m a new transplant of Seattle, follower of
            Jesus, part time food connoisseur, and husband to my lovely wife,
            Elissa! Other than photos, in my free time I like to think I'm a
            runner, hiker, crossfitter, and chef. I binge watched Blacklist, New
            Girl, The League, Parks & Recreation (not a fan of The Office), This
            Is Us, and Parenthood. Let's take some photos and grab a beer!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
