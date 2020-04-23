import React from "react"
import SEO from "@components/seo"

const ContactUs = () => {
  return (
    <div className="page contact-us">
      <SEO title="Contact Us" />
      <div className="bg--off-white page-height">
        <div className="container pb100">
          <div className="row flex-ai--fs flex-col--sm">
            <div className="flex flex-col flex-ai--fs color--black col-6 flex-jc--fs mb50">
              <h1 className="mt0 color--dark-purple">Leave us a note</h1>
              <p className="p2">
                We're committed to helping us out of this crisis while
                respecting privacy and fundamental rights. As we scale up as
                quickly as possible, we're forming a team of engineers,
                designers, medical professionals, and contrarians, and we'd love
                to hear from you!
              </p>
              <p className="p2">
                Have questions or concerns? Want to help? Let us know!
              </p>
            </div>
            <div className="col-1"></div>
            <form
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              className="flex flex-col col-5 w100p--sm"
            >
              <input type="hidden" name="bot-field" />
              <label className="flex flex-col mv10">
                Name
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w500 w100p--sm"
                />
              </label>
              <label className="flex flex-col mv10">
                Email
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w500 w100p--sm"
                />
              </label>
              <label className="flex flex-col mv10">
                Subject
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="w500 w100p--sm"
                />
              </label>
              <label className="flex flex-col mv10">
                Message
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="5"
                  className="w500 w100p--sm"
                />
              </label>
              <div className="row mt20">
                <button
                  className="btn btn--royal-blue w150 w100p--sm"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
