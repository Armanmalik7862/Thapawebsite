"use client";
import { useState } from "react";
import {toast} from "react-toastify";


function ContactForm() {
  const [state, setstate] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setstate((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Submitted Successfully");
     // Reset form fields to empty after submission
     setstate({
      username: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col mt-5 h-screen ">
        <h2 className="text-xl font-semibold">
          we had love to hear <span className="text-red-600">from you</span>
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center flex-col mt-7 w-[20em] h-[30em] rounded-sm  bg-zinc-500"
        >
          <div className="mt-5 flex items-center justify-center flex-col ">
            <label htmlFor="username" className="text-white">
              UserName
            </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={inputEvent}
              value={state.username}
              placeholder="Enter your Username"
              required
              autoComplete="username" 
              className="mt-2 border-[1px] border-zinc-200 rounded-md pl-2 "
            />
          </div>
          <div className="mt-5 flex items-center justify-center flex-col ">
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={inputEvent}
              value={state.email}
              placeholder="Enter your Email"
              required
              autoComplete="email" 
              className="mt-2 border-[1px] border-zinc-200 rounded-md pl-2"
            />
          </div>
          <div className="mt-5 flex items-center justify-center flex-col ">
            <label htmlFor="phone" className="text-white">
              Phone no.
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              onChange={inputEvent}
              value={state.phone}
              placeholder="Enter your Phone number"
              required
              autoComplete="off" 
              className="mt-2 border-[1px] border-zinc-200 rounded-md pl-2"
            />
          </div>
          <div className="mt-5 flex items-center justify-center flex-col ">
            <label htmlFor="message" className="text-white">
              Message
            </label>
            <textarea
              type="text"
              name="message"
              id="message"
              onChange={inputEvent}
              value={state.message}
              placeholder="Enter your Message"
              required
              autoComplete="off" 
              className="mt-2 border-[1px] border-zinc-200 rounded-md pl-2"
            />
          </div>
          <button
            type="submit"
            className=" mt-7 text-white bg-black/70 w-[6em] border-[1px] border-black rounded-md active:bg-black"
          >
            Submit
          </button>
        </form>
      </div>
      <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.195149830409!2d85.32340617435614!3d27.680362726683125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b6f4fdc6b7%3A0x5b9b6f11175a6a12!2sProfessional%20Computer%20System%20P.%20Ltd.%20(PCS)!5e0!3m2!1sen!2snp!4v1702371077834!5m2!1sen!2snp" 
       width={1300} 
       height={450} 
       style={{border:0}} 
       allowFullScreen="" 
       loading="lazy" 
       referrerPolicy="no-referrer-when-downgrade" 
       className="mx-auto">
        
       </iframe>
    </>
  );
}

export default ContactForm;
