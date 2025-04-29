import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="text-center md:text-left text-sm">
          &copy; {currentYear} Neil Nevitt. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
