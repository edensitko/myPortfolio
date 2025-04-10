"use client";

import { contactInfo } from "@/src/staticData/home/home";
import { useState } from "react";
import Input from "../ui/fields/Input";
import Textarea from "../ui/fields/TextArea";
import SectionHeading from "../shared/SectionHeading";
import ContactInfo from "./ContactInfo";

const ContactMe = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: "",
  });

  const { fullName, email, message } = formValues;

  const reset = () => {
    setFormValues({
      fullName: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setStatus({ submitting: true, success: null, message: "" });
      
      // Using formsubmit.co service with AJAX to prevent opening a new tab
      const formData = new FormData();
      
      // Add form fields
      formData.append('fullName', fullName);
      formData.append('email', email);
      formData.append('message', message);
      
      // Add formsubmit specific fields
      formData.append('_captcha', 'false');
      formData.append('_subject', `Portfolio Contact from ${fullName}`);
      
      // Use fetch API to submit the form
      const response = await fetch('https://formsubmit.co/ajax/edensit139@gmail.com', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success === "true") {
        setStatus({
          submitting: false,
          success: true,
          message: "Your message has been sent successfully."
        });
        // reset after form submit
        reset();
      } else {
        setStatus({
          submitting: false,
          success: false,
          message: "Something went wrong. Please try again."
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        submitting: false,
        success: false,
        message: "An error occurred. Please try again later."
      });
    }
  };

  return (
    <div
      data-scroll-index="8"
      id="contact"
      className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
    >
      <div className="px-5 py-8 bg-white dark:bg-nightBlack rounded-2xl contact-section lg:p-13">
        <SectionHeading {...contactInfo.contactInfoHeading} />

        <div className="grid gap-12 mt-8 mb-10 md:my-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <ul className="space-y-6 md:space-y-10 2xl:space-y-12 contact-info">
              {contactInfo?.contactInfoData?.map((item) => (
                <ContactInfo key={item?.id} {...item} />
              ))}
            </ul>
          </div>

          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-group">
                <Input handleChange={handleChange} value={fullName} className="w-full p-5 text-sm outline-none h-13 focus:border-theme dark:focus:border-theme dark:placeholder:text-white/40" />
              </div>
              <div className="form-group">
                <Input
                  type="email"
                  placeholder="Email Address"
                  handleChange={handleChange}
                  name="email"
                  value={email}
                  className="w-full p-5 text-sm outline-none h-13 focus:border-theme dark:focus:border-theme dark:placeholder:text-white/40"
                />
              </div>
              <div className="form-group">
                <Textarea
                  handleChange={handleChange}
                  name="message"
                  value={message}
                  className="w-full px-5 py-4 text-sm outline-none focus:border-theme dark:placeholder:text-white/40"
                />
              </div>
              <div className=" form-group">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="inline-flex items-center gap-2 text-[15px] font-medium border border-theme bg-theme text-white py-4.5 px-9 rounded-4xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover disabled:opacity-70"
                  aria-label="Send Message"
                >
                  {status.submitting ? "Sending..." : "Send Message"}
                </button>
              </div>
              {status.message && (
                <div className={`mt-4 p-3 rounded-lg ${status.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
        <iframe
          className="w-full overflow-hidden border-10 border-platinum dark:border-greyBlack embed-map h-80 2xl:h-96 rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108169.92830847439!2d34.72057178229287!3d32.08791567519969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo%2C%20Israel!5e0!3m2!1sen!2sil!4v1711744420031!5m2!1sen!2sil"
          aria-label="Contact Map"
        />
      </div>
    </div>
  );
};

export default ContactMe;
