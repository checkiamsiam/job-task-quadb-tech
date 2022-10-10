import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner px-4 py-10 md:px-16 md:py-20 ">
      <div className="text-left text-white">
        <h1 className="font-bold text-4xl md:text-5xl">Welcome.</h1>
        <h3 className="text-2xl md:text-3xl font-medium">
        The sea of action , emotion , romance and more...~!
        </h3>
      </div>

      <form className="relative flex items-center">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for a movie ...."
          className="block py-3 px-6 rounded-full w-full bg-white  focus:outline-none focus:shadow-md focus:shadow-primary text-neutral"
        />
        <label htmlFor="submit">
          <input type="submit" value="" />
          <button className="py-3 px-6 rounded-full text-white bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-colors duration-300 absolute top-0 right-0">
            Search
          </button>
        </label>
      </form>
    </div>
  );
};

export default Banner;