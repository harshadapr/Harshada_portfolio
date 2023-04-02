import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          As a web developer, I have a strong command of both frontend and backend programming, and am constantly striving to improve my skills and stay up-to-date with the latest technologies. I am seeking new opportunities to work with new web technologies and deliver outstanding results for my clients.
        </p>
        <br />
        <br />

        <p className="text-xl">
          <br />
          My passion for web development stems from the satisfaction I derive from creating something from scratch and bringing ideas to life through coding.
          I find great satisfaction in creating something from scratch and bringing ideas to life through coding. My passion lies in developing minimalistic designs that are both aesthetically pleasing and user-friendly, and in creating brand identities that resonate with customers. <br /> <br />
          I enjoy creating or redesigning a distinct identity for a product or service, get more traffic from search engine and social platforms.<br /><br />
          I value minimalistic designs, thoughtful branding of the content, and customer relatable experience. Let’s discover together how we can make your project convert better!<br /> <br />

        </p>
      </div>
    </div>
  );
};

export default About;
