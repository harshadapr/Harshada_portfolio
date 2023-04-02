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
      repo: 'https://github.com/saintlypioneer/RoyalBrothersReact'
    },
    {
      id: 2,
      src: bewakoof,
      link: 'https://relaxed-marzipan-879455.netlify.app/',
      repo: 'https://github.com/SurajAnand88/Bewakoof-'
    },
    {
      id: 3,
      src: unplash,
      link: 'https://soft-cucurucho-b7b394.netlify.app/',
      repo: 'https://github.com/Ajay-bhagal/team_6'
    },
    {
      id: 4,
      src: nykaa,
      link: 'https://code735.github.io/Nykaa_Clone/?',
      repo: 'https://github.com/code735/Nykaa_Clone'
    },

  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Here are some of my projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
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
