import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-gray-300 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-sm">
          &copy; {currentYear} Neil Nevitt. All rights reserved. <br />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
