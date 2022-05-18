import React from "react";
import "./Portfolio.css";
import img1 from "../../assets/download222.jpeg";
import img2 from "../../assets/download222.jpeg";
import img3 from "../../assets/download222.jpeg";
import img4 from "../../assets/download222.jpeg";
import img5 from "../../assets/download222.jpeg";
import img6 from "../../assets/download222.jpeg";

const data = [
  {
    id: 1,
    image: img1,
    title: "crypto",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/18242955-Wallet-App-UI-UX",
  },
  {
    id: 2,
    image: img2,
    title: "crypto",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/18242955-Wallet-App-UI-UX",
  },
  {
    id: 3,
    image: img3,
    title: "crypto",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/18242955-Wallet-App-UI-UX",
  },
  {
    id: 4,
    image: img4,
    title: "crypto",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/18242955-Wallet-App-UI-UX",
  },
  {
    id: 5,
    image: img5,
    title: "crypto",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/18242955-Wallet-App-UI-UX",
  },
  {
    id: 6,
    image: img6,
    title: "crypto",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/18242955-Wallet-App-UI-UX",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__container container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
