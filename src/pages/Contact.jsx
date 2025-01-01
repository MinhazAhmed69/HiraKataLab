import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-100">
      <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
      <form className="space-y-4 w-96">
        <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
        <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
        <textarea placeholder="Your Message" className="textarea textarea-bordered w-full" />
        <button type="submit" className="btn btn-primary w-full">Send</button>
      </form>
    </div>
  );
}

export default Contact;