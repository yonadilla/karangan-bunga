import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      <a href="/">
        <img
          className="logo"
          width="375"
          height="127"
          src="https://floristngawi.com/wp-content/uploads/2025/02/NB-Florist-Logo-Dark-e1739887814616.png"
          alt="NB Florist Logo - Dark"
          srcSet="https://floristngawi.com/wp-content/uploads/2025/02/NB-Florist-Logo-Dark-e1739887814616.png 375w, https://floristngawi.com/wp-content/uploads/2025/02/NB-Florist-Logo-Dark-e1739887814616-300x102.png 300w"
          sizes="(max-width: 375px) 100vw, 375px"
        />
      </a>
    </div>
  );
}
