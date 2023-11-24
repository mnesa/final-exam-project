import React from "react";

const Loading = () => {
  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center my-5 py-5">
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
