import React, { Component } from "react";

class Facebook extends Component {
  render() {
    return (
      <a
        className="footer-icon"
        href="https://www.facebook.com/dane.brwn47"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="50"
          height="52"
          viewBox="0 0 50 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50 25.6257C50 39.7784 38.8071 51.2515 25 51.2515C11.1929 51.2515 0 39.7784 0 25.6257C0 11.473 11.1929 0 25 0C38.8071 0 50 11.473 50 25.6257ZM26.8241 26.6287H31.285L31.8755 20.7468H26.8245V17.2819C26.8245 15.9822 27.6623 15.6771 28.2581 15.6771H31.8906V9.96239L26.8842 9.94092C21.3279 9.94092 20.0654 14.2071 20.0654 16.9315V20.7413H16.8509V26.6287H20.0654V43.3809H26.8241V26.6287Z"
            fill="#3B5998"
          />
        </svg>
      </a>
    );
  }
}

export default Facebook;
