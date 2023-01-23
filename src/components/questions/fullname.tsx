import React, { FC } from "react";

const FullName: FC = () => {
  return (
    <div className="carousel-item active d-flex align-items-center flex-column justify-content-center">
      <div className="container d-flex flex-column align-items-center mb-20">
        <div className="fs-4">What is your name?</div>
        <input
          type="text"
          className="w-80 mt-20 pt-2 pr-2 pb-2 pl-5 rounded-pill shadow-lg"
          placeholder="Your Name"
        />
      </div>
      <div className="d-flex">
        <button className="btn btn-secondary prev-fact pl-3 pr-3 pt-1 pb-1 w-40 fs-3 rounded-pill mb-[20px]">
          Prev
        </button>
        <button className="btn btn-secondary next-fact pl-3 pr-3 pt-1 pb-1 w-40 fs-3 rounded-pill mb-[20px] ml-20">
          Next
        </button>
      </div>
    </div>
  );
};

export default FullName;
