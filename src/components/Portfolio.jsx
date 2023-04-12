import React from "react";
import royal from "../assets/portfolio/Royal_brothers.png"
import bewakoof from "../assets/portfolio/bewakoof.png"
import unplash from "../assets/portfolio/unplash.png"
import nykaa from "../assets/portfolio/nykaa.png"


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: royal,
      link: 'https://symphonious-cupcake-6a58b9.netlify.app/?',
      repo: 'https://github.com/saintlypioneer/RoyalBrothersReact',
      tech: "React.JS, Redux, React-Router-Dom, ChakraUI, Styled-Components",
      desc: "This is a clone of Royal Brothers. It is focused on building India’s largest mobility solutions provider, providing rentals spanning across 14 states, 43 cities and 3 international cities.It's a collaborative project."
    },
    {
      id: 2,
      src: bewakoof,
      link: 'https://relaxed-marzipan-879455.netlify.app/',
      repo: 'https://github.com/SurajAnand88/Bewakoof-',
      tech: "React.JS, Javascipt, React-Router-Dom, Html, Css, Styled-Components",
      desc: "Bewakoof.com clone ,Replicating popular Indian online shopping website, Wide range of trendy and affordable clothing, accessories,  Showcasing web development skills and attention to detail"
    },
    {
      id: 3,
      src: unplash,
      link: 'https://soft-cucurucho-b7b394.netlify.app/',
      repo: 'https://github.com/Ajay-bhagal/team_6',
      tech: "React.JS, Javascipt, Html, Css",
      desc: "Unsplash clone project, Curating high-quality photos, Built with React, CSS, HTML, Showcasing frontend development skills,Stunning visuals for user inspiration,Replicating popular website with attention to detail. "
    },
    {
      id: 4,
      src: nykaa,

      link: 'https://code735.github.io/Nykaa_Clone/?',
      repo: 'https://github.com/code735/Nykaa_Clone',
      tech: "Javascript, Html, Css",
      desc: "Nykaa is an Indian e-commerce company, founded by Falguni Nayar in 2012 and headquartered in Mumbai. In 2020, it became the first Indian unicorn startup. In this project our team tried to replicate this website"
    },

  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-auto portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500" >
            Projects
          </p>
          <p className="py-6">Here are some of my projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0" >
          {portfolios.map(({ id, src, link, repo, tech, desc }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div style={{

                textAlign: "center",
                width: "100%",
                fontWeight: "300",
                marginTop: "10px"

              }}>


                <p style={{ textAlign: "start", marginLeft: "15px" }}>{desc}</p>
                <br />
                <p >  <b>TechStack</b> : {tech}</p>

              </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
