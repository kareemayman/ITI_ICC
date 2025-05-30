import React from "react"

export default function Contact() {
  return (
    <div className="container contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions, suggestions, or feedback, feel free to reach out to us at:</p>
      <p>
        <strong>Email: </strong>
        <a href="mailto:movieinfo@gmail.com">movieInfo@gmail.com</a>
      </p>
      <p>
        <strong>Phone:</strong> +1 (123) 456-7890
      </p>
      <p>
        <strong>Address:</strong> 123 Movie Street, Film City, CA 12345
      </p>
      <p>
        We would love to hear from you! Your feedback is important to us and helps us improve the
        application.
        Thank you for using our movie application!
        Follow us on social media for updates:
      </p>
      <p>
        <strong>Twitter:</strong> <a href="https://twitter.com/movieapp">@movieapp</a><br />
        <strong>Facebook:</strong> <a href="https://facebook.com/movieapp">facebook.com/movieapp</a><br />
        <strong>Instagram:</strong> <a href="https://instagram.com/movieapp">@movieapp</a>
      </p>
      <p>We look forward to connecting with you!</p>
    </div>
  )
}
