import React from "react";
import Base from "../component/Base";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="" style={{ backgroundColor: "#cab3f2" }}>
      <Base>
      <br></br>
        <div class="w-full md:w-96 md:max-w-full mx-auto bg-white">
          <div class="p-6 border border-black sm:rounded-md">
            <form method="POST" >
              <div className="text-center text-lg">Contact us</div>
              <br/>
              <label class="block mb-6">
                <span class="text-gray-700">Your name</span>
                <input
                  type="text"
                  name="name"
                  class="block w-full
            mt-1
            border-solid-black
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="Enter Your Name"
                />
              </label>
              <label class="block mb-6">
                <span class="text-gray-700">Email address</span>
                <input
                  name="email"
                  type="email"
                  class="
            block
            w-full
            mt-1
            border-solid
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder=" Email"
                  required
                />
              </label>
              <label class="block mb-6">
                <span class="text-gray-700">Message</span>
                <textarea
                  name="message"
                  class="
            block
            w-full
            mt-1
            border-solid
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </label>
              <div class="mb-6">
                <button
                  type="submit"
                  class="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
                >
                  Contact Us
                </button>
              </div>
              <div></div>
            </form>
          </div>
        </div>

        <Footer />
      </Base>
    </div>
  );
};

export default Contact;
