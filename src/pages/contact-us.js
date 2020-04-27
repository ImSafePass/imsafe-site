import React, { useState } from "react"
import SEO from "@components/seo"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactUs = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const onSubmit = event => {
    event.preventDefault()

    const params = {
      email,
      name,
      message,
      subject,
    }

    const form = event.target
    const data = {
      "form-name": form.getAttribute("name"),
      ...params,
    }

    const body = encode(data)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    })
      .then(() => {
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
      })
      .catch(() => {
        alert(
          "Something went wrong! Please email sasha@imsafepass.com to let us know."
        )
      })
  }
  return (
    <div className="page contact-us">
      <SEO title="Contact Us" />
      <div className="bg--off-white page-height pt100">
        <div className="container pb100">
          <div className="row flex-ai--fs flex-col--sm">
            <div className="flex flex-col flex-ai--fs color--black col-6 flex-jc--fs mb50">
              <h1 className="mt0 color--dark-purple">Leave us a note</h1>
              <p>
                We're committed to helping us out of this crisis while
                respecting privacy and fundamental rights. As we scale up as
                quickly as possible, we're forming a team of engineers,
                designers, medical professionals, and contrarians, and we'd love
                to hear from you!
              </p>
              <p>Have questions or concerns? Want to help? Let us know!</p>
            </div>
            <div className="col-1"></div>
            <form
              onSubmit={onSubmit}
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
                  value={name}
                  onChange={({ target }) => {
                    setName(target.value)
                  }}
                  id="name"
                  required
                  className="w500 w100p--sm"
                />
              </label>
              <label className="flex flex-col mv10">
                Email
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={({ target }) => {
                    setEmail(target.value)
                  }}
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
                  value={subject}
                  onChange={({ target }) => {
                    setSubject(target.value)
                  }}
                  id="subject"
                  required
                  className="w500 w100p--sm"
                />
              </label>
              <label className="flex flex-col mv10">
                Message
                <textarea
                  name="message"
                  value={message}
                  onChange={({ target }) => {
                    setMessage(target.value)
                  }}
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
