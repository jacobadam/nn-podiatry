import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-gray-300 py-6" role="contentinfo">
      <div className="pl-8">
        <p className="text-center md:text-left text-sm">
          &copy; {currentYear} Greenhouse Web Designs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
