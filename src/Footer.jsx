const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 py-6 text-gray-300" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm sm:text-left">
          &copy; {currentYear} Neil Nevitt. All rights reserved.
        </p>

        <p className="mt-1 text-center text-xs sm:text-left">
          Designed by{" "}
          <a
            href="https://www.greenhousewebdesigns.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-200 underline underline-offset-4 transition hover:text-white"
          >
            Greenhouse Web Designs
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
