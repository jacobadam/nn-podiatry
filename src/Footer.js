import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-gray-300 py-6" role="contentinfo">
      <div className="md:pl-8">
        <p className="text-center md:text-left text-sm">
          &copy; {currentYear} Neil Nevitt. All rights reserved.
        </p>
        <p className="text-center md:text-left text-xs mt-1">
          Designed by{" "}
          <a
            href="https://www.greenhousewebdesigns.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors underline underline-offset-2"
          >
            Greenhouse Web Designs
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
