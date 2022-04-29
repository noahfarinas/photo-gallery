import React from "react";
import "./Footer.css"
const SOCIALS = [
  {
    name: "instagram",
    logo: "logo-instagram",
    link: "https://www.instagram.com/noahnigelphoto/",
  },
  {
    name: "linkedin",
    logo: "logo-linkedin",
    link: "https://www.linkedin.com/in/noah-farinas-b3b9571b0/",
  },
  {
    name: "github",
    logo: "logo-github",
    link: "https://github.com/noahfarinas",
  },
  {
    name: "photo",
    logo: "camera-outline",
    link: "https://www.noahnigelphotos.com/",
  },
];
export const footer = (item) => {
  return (
    <div className="footer">
      <div className="col">
        <>
        {SOCIALS.map((item) => (
          <a class="links" href={item.link}>
            <ion-icon name={item.logo}></ion-icon>
          </a>
          ))}
        </>
      </div>
    </div>
  );
};

export default footer;
