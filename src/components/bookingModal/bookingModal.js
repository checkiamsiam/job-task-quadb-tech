import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const BookingModal = ({ movie }) => {
  const navigate = useNavigate()
  const ref = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    const bookingData = {id : movie.id , showName : ref.current.showName.value , clientName : ref.current.yourName.value , contactNumber : ref.current.number.value}
    localStorage.setItem("bookingData" , JSON.stringify(bookingData))
    navigate('/')
  }
  return (
    <>
      <input type="checkbox" id="booking" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="booking" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <form ref={ref} onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="mr-4 font-bold inline-block mb-2 text-primary" htmlFor="text">
                Show Name:
              </label>
              <input
                value={movie?.name}
                type="text"
                id="showName"
                name="showName"
                className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded text-black"
                placeholder="LikedIn Profile Link"
              />
            </div>
            <div className="mb-6">
              <label className="mr-4 font-bold inline-block mb-2 text-primary" htmlFor="text">
                Your Name:
              </label>
              <input
                type="text"
                id="yourName"
                name="yourName"
                className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded text-black"
                placeholder="your name"
              />
            </div>
            <div className="mb-6">
              <label className="mr-4 font-bold inline-block mb-2 text-primary" htmlFor="text">
                Contact Number:
              </label>
              <input
                type="text"
                id="number"
                name="number"
                className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded text-black"
                placeholder="your name"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-6  bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300 btn btn-accent text-base-100 font-bold bg-gradient-to-r from-primary to-accent"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
