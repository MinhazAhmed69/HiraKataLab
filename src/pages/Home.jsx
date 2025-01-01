import React from 'react';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-200">
      <h1 className="text-5xl font-bold text-primary">Welcome to HiraKataLab</h1>
      <p className="py-6 text-lg text-gray-700">Master Hiragana and Katakana with ease!</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  );
}

export default Home;