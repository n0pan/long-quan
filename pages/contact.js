import React from "react";

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Feel free to contact me by email at{" "}
        <a href="mailto:longquanhp@gmail.com">longquanhp@gmail.com</a>!
      </p>
      <div style={{ marginTop: 35 }}>
        <h2>Social</h2>
        <ul style={{ paddingLeft: 0 }}>
          <li>
            <a href="https://github.com/n0pan">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/longquanhp/">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
