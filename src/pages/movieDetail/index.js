import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineUser, AiOutlineWarning } from "react-icons/ai";
import { MdHowToVote } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholder from "../../assets/placeholder.jpg";
import Loader from "../../components/loader/Loader.js";
import axios from "axios";
import Swal from "sweetalert2";
import BookingModal from "../../components/bookingModal/bookingModal";

const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [thisMovie, setThisMovie] = useState({});
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
  }, [id]);


  useEffect(()=> {
    if(movies){
      setThisMovie(movies.find((item) => item?.show?.id == id))
    }
  },[id , movies])

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="min-h-screen bg-neutral bg-opacity-90 relative p-4 md:p-12 flex flex-col md:flex-row items-center gap-8">
        <LazyLoadImage
          placeholderSrc={placeholder}
          alt="img"
          effect="black-and-white"
          src={thisMovie?.show?.image?.medium}
          className={`absolute top-0 right-0 bottom-0 left-0 m-auto -z-10 max-h-screen w-full`}
        />
        <div className="w-[80%] md:w-[30%] min-h-[60%]">
          <LazyLoadImage
            placeholderSrc={placeholder}
            alt="img"
            effect="black-and-white"
            src={thisMovie?.show?.image?.medium}
            width="100%"
            height="100%"
            className="block rounded-lg shadow"
          />
        </div>

        <div className="flex flex-col items-start w-[100%] md:w-[70%]">
          <h1 className="text-3xl font-semibold text-white hover:text-gray-200">
            <a href={thisMovie?.show?.officialSite} target="_blank" rel="noopener noreferrer">
              <span>{thisMovie?.show?.name}</span>
              <span className="font-normal">
                {"(" + thisMovie?.show?.premiered?.split("-")[0] + ")"}
              </span>
            </a>
          </h1>
          <div className="flex items-center">
            {thisMovie?.show?.genres?.map((genre) => (
              <span>{genre + ", "}</span>
            ))}
          </div>

          <div className="flex items-center gap-6 mb-4">
            <div
              className="w-16 h-16 rounded-full bg-neutral flex items-center justify-center"
              title="Rating"
            >
              <span
                className={`rounded-full w-14 h-14 bg-neutral text-white font-semibold flex items-center justify-center border-2 p-2 ${
                  thisMovie?.show?.rating?.average > 5 ? "border-success" : "border-error"
                }`}
              >
                {thisMovie?.show?.rating?.average || undefined}
              </span>
            </div>

            <div
              className="flex items-center gap-1 text-white"
              title="Vote Count"
            >
              <span>
                <MdHowToVote className="text-4xl" />
              </span>
              <span>{thisMovie?.show?.weight || "undefined"}</span>
            </div>
            
          </div>

          <div className="text white my-6">
            <h3 className="font-semibold">Overview</h3>
            {thisMovie?.show?.summary}
          </div>

          <div className="flex items-center gap-6">
            <span>
              Status: <b>Released</b>
            </span>
            {thisMovie?.show?.premiered && (
              <span>
                ReleaseDate: <b>{thisMovie?.show?.premiered}</b>
              </span>
            )}
            {thisMovie?.show?.schedule && (
              <span>
                Show Time: <b>{thisMovie?.show?.schedule?.time}</b>
              </span>
            )}
          </div>
          <label htmlFor="booking" className="btn btn-primary mt-4 modal-button">Book Ticket</label>
        </div>
      </div>

      <div className="p-4 md:p-16 bg-white">
        <h2 className="text-neutral font-semibold text-3xl border-l-4 border-primary pl-2 ">
          Additional Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 text-xl text-black py-6">
          
          {thisMovie?.show?.language && <span>
            Languages:{" "}
            <b>{thisMovie?.show?.language}</b>
          </span>}
          {thisMovie?.show?.externals.imdb && <span>
            IMDB:{" "}
            <a
              href={"https://www.imdb.com/title/" + thisMovie?.show?.externals.imdb}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {thisMovie?.show?.name}
            </a>
          </span>}
          {thisMovie?.show?.runtime && <span>
            Runtime: <b>{thisMovie?.show?.runtime}</b>
          </span>}
        </div>

      

        
      </div>
      <BookingModal movie={thisMovie}/>
    </div>
  );
};

export default MovieDetails;
