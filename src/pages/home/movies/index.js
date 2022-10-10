import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholder from "../../../assets/placeholder.jpg";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("https://api.tvmaze.com/search/shows?q=all");
        setMovies(data);
      } catch (error) {
        Swal.fire("Oops", "Something went wrong...!", "error");
      }
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) {
    return <div>this is the loading</div>;
  }

  return (
    <div className="bg-white py-8 px-2 md:px-16">
      <div>
        <h1 className="text-2xl font-semibold text-neutral border-l-4 border-primary pl-4 mb-5">"Popular Contents"</h1>
      </div>

      {movies.length === 0 ? (
        <h1 className="text-center my-8 text-3xl text-primary font-medium">No Movie Found</h1>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-7 gap-x-3 gap-y-6">
            {movies.map((item) => {
              const { id, name, image, premiered, rating } = item.show;
              return (
                <div key={id} className="rounded-lg mx-auto shadow-md hover:shadow-primary duration-300">
                  <Link to={`/movie/${id}`}  className="flex flex-col">
                    <div className="relative w-full min-h-[350px]">
                      <LazyLoadImage
                        alt={`${name} poster`}
                        placeholderSrc={placeholder}
                        effect="opacity"
                        src={image.medium}
                        width="100%"
                        height="100%"
                        className="block min-h-[350px] min-w-full rounded-t-lg"
                      />
                      <span className="absolute -bottom-3 left-2 w-10 h-10 rounded-full bg-neutral  flex items-center justify-center">
                        <span
                          className={`rounded-full w-9 h-9 bg-neutral text-white font-semibold flex items-center justify-center border-2 p-2 ${
                            rating.average > 5 ? "border-success" : "border-error"
                          }`}
                        >
                          {rating.average}
                        </span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="mt-4 p-2 flex flex-col justify-between">
                        <h3 className="block text-black font-semibold text-xl hover:text-primary">{name}</h3>
                        <span className="text-neutral text-sm">{premiered}</span>
                      </div>
                      <div className="px-2">
                        <Link to={`/movie/${id}`} className="btn btn-primary ">Detail</Link>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;
