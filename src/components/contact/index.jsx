import React from "react";
import { Form, withFormik, FastField, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = ({
  setFieldValue,
  isSubmitting,
  values,
  errors,
  touched
}) => (
  <Form
    name="contact-form"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    className="w-full max-w-4xl m-auto p"
  >
  <div class="flex flex-wrap -mx-3 mb-6"> 
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    
      <FastField 
        type="text"
        name="fname"
        component="input"
        aria-label="fname"
        placeholder="First name*"
        error={touched.fname && errors.fname}
        className="text-md block px-3 py-2 rounded-lg w-full
        bg-white border-2 border-gray-300 placeholder-gray-400 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
      />
      <ErrorMessage  name="fname" >
      { msg => <div className="text-red-600 text-lg italic mt-1">{msg}</div> }
      </ErrorMessage>
    </div>

    <div class="w-full md:w-1/2 px-3">
    
      <FastField 
        id="lname"
        aria-label="lname"
        component="input"
        as={FastField}
        type="text"
        name="lname"
        placeholder="Last Name*"
        error={touched.lname && errors.lname}
        className="text-md block px-3 py-2 rounded-lg w-full
        bg-white border-2 border-gray-300 placeholder-gray-400 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
      
      />
      <ErrorMessage name="lname" >
      { msg => <div className="text-red-600 text-lg italic mt-1">{msg}</div> }
      </ErrorMessage>
  </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
    <FastField 
        id="email"
        aria-label="email"
        component="input"
        as={FastField}
        type="email"
        name="email"
        placeholder="Email*"
        error={touched.email && errors.email}
        className="text-md block px-3 py-2 rounded-lg w-full
        bg-white border-2 border-gray-300 placeholder-gray-400 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
      
      />
      <ErrorMessage name="email" >
      { msg => <div className="text-red-600 text-lg italic mt-1">{msg}</div> }
    
      </ErrorMessage>
    </div>
  </div>



  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
    
      <FastField 
        component="textarea"
        aria-label="message"
        id="message"
        rows="8"
        type="text"
        name="message"
        placeholder="Message*"
        error={touched.message && errors.message}
        className="text-md block px-3 py-2 rounded-lg w-full
        bg-white border-2 border-gray-300 placeholder-gray-400 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
      />
      <ErrorMessage  name="message" >
      { msg => <div className="text-red-600 text-lg italic mt-1">{msg}</div> }
   
      </ErrorMessage>
    </div>
  </div>


    {values.success && (
      
      <div className="text-center pb-8">
          <h4>
            Your message has been successfully sent, I will get back to you
            ASAP!
          </h4>
          </div>
    )}
    <div className="text-center">
      <button
        type="submit"
        disabled={isSubmitting}
        className="disabled:bg-green-800 bg-black font-black text-white hover:bg-red-600 uppercase py-2 px-4 border border-blue-700 rounded"
      >Submit
      </button>
     </div>
  </Form>
  );

export default withFormik({
  mapPropsToValues: () => ({
    fname: "",
    lname: "",
    email: "",
    message: "",
    success: false,
    isSubmitting : true,
  }),
  validationSchema: () =>
    Yup.object().shape({
      fname: Yup.string()
                .required("First name field is required")
                .max(15, 'First Name should not exceed 15 characters'),

      lname: Yup.string()
                 .required("Last name field is required")
                 .max(15, 'Last Name should not exceed 15 characters'),

      email: Yup.string()
                 .email("Please enter valid Email ID")
                 .max(50, 'Email should not exceed 50 characters')
                 .required("Email field is required"),

      message: Yup.string()
                  .required("Message field is required")
                  .min(30, 'Please enter atleast 30 charcters')
                  .max(150, 'Character limit should not exceed more than 150 characters')
    }),
  handleSubmit: async (
    { fname, lname ,email, message },
    { setSubmitting, resetForm, setFieldValue }
  ) => {
    try {
      const encode = data => {
        return Object.keys(data)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join("&");
      };
      await fetch("/?no-cache=1", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact-form",
          fname,
          lname,
          email,
          message
        })
      });
      await setSubmitting(false);
      await setFieldValue("success", true);
      setTimeout(() => resetForm(), 2000);
    } catch (err) {
      setSubmitting(false);
      setFieldValue("success", false);
      alert("Something went wrong, please try again!"); // eslint-disable-line
    }
  }
})(ContactForm);