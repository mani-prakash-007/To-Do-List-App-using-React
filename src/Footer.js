import React from "react";

const Footer = ({ tasks, date }) => {
  return (
    <footer>
      <p>
        {tasks} Tasks{" "}
        <span style={{ textAlign: "right" }}> CopyRights &copy; {date}</span>
      </p>
    </footer>
  );
};

Footer.defaultProps = {};
export default Footer;
