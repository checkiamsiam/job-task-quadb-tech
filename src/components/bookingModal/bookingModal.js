import React from "react";

const BookingModal = ({movie}) => {
  return (
    <>
      <input type="checkbox" id="booking" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <label htmlFor="booking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          {movie?.show?.name}
        </div>
      </div>
    </>
  );
};

export default BookingModal;
