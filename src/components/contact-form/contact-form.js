import React from "react"
import "./contact-form.css"

const ContactForm = () => {
  return (
    <>
      <h5
        className="font-header font-semibold text-front text-sm uppercase mt-12 mb-3"
        id="contact"
      >
        Contact
      </h5>

      <form className="flex flex-wrap" method="post">
        <div className="flex flex-wrap w-full">
          <div className="w-full lg:w-1/3 py-px lg:px-px">
            <input
              aria-label="Name"
              autoComplete="name"
              className="form-input"
              name="name"
              placeholder="NAME"
              required
              type="text"
            />
          </div>
          <div className="w-full lg:w-1/3 py-px lg:px-px">
            <input
              aria-label="E-mail"
              autoComplete="email"
              className="form-input"
              name="email"
              placeholder="EMAIL ADDRESS"
              required
              type="email"
            />
          </div>
          <div className="w-full lg:w-1/3 py-px lg:px-px">
          <input
                aria-label="Phone number"
                autoComplete="tel"
                className="form-input"
                name="phone"
                placeholder="PHONE NUMBER"
                type="tel"
              />
          </div>
        </div>


        <div className="w-full text-right py-px lg:p-px">
          <textarea
            aria-label="Message"
            className="block form-input bg-back-light resize-none border-b-0 pb-4"
            name="message"
            placeholder="MESSAGE"
            required
            rows="6"
          ></textarea>
          <div className="bg-back-light ">
            <input
              className="font-header inline-block font-semibold px-6 py-2 leading-tight cursor-pointer outline-none bg-front text-back-light uppercase mr-4 my-4 transition-opacity duration-150 hover:bg-lead"
              type="submit"
              value="Send"
            />
          </div>
        </div>
      </form>
    </>
  )
}

export default ContactForm
