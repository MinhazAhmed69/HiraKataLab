import React from 'react';

function About() {
  return (
    <div className="flex justify-center items-center h-screen bg-base-100">
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">About HiraKataLab</h2>
          <p>
            HiraKataLab is your gateway to mastering Japanese letters through interactive learning.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;