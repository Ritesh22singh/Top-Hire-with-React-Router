import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6 py-10 animate-fade-in">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">📧 support@tophire.com</p>
          <p className="text-sm">📞 +91 123456789</p>
          <div className="flex space-x-5 mt-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-all duration-300"
            >
              Facebook
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-all duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-all duration-300"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">JobSeeker</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
