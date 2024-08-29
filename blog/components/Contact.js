"use client";
import React, { useState } from "react";
function Contact() {
    const [input, setInput] = useState({});
    const [msg, setMsg] = useState("");
    const handleInput = (e) => {
      setInput((state) => {
        return { ...state, [e.target.name]: e.target.value };
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(input);
      fetch(process.env.NEXT_PUBLIC_API_URL + "/enquiry", {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setMsg(res.message);
          setInput({});
          setTimeout(() => {
            setMsg("");
          }, 3000);
        })
        .catch((err) => console.log(err));
    };
    return (
      <main className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="flex items-center mb-4">
            <label htmlFor="name" className="w-1/4">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="border-4 rounded px-2 py-1 w-3/4"
              onChange={handleInput}
              value={input.name ?? ""}
              name="name"
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="email" className="w-1/4">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="border-4 rounded px-2 py-1 w-3/4"
              onChange={handleInput}
              value={input.email ?? ""}
              name="email"
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="message" className="w-1/4">
              Message:
            </label>
            <textarea
              id="message"
              className="border-4 rounded px-2 py-1 w-3/4"
              rows="4"
              onChange={handleInput}
              value={input.message ?? ""}
              name="message"
            ></textarea>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
        {msg && <p>{msg}</p>}
      </main>
    );
  }
  
  export default Contact;