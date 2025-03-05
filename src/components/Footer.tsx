import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-gray-900 text-white text-center flex flex-col items-center">
      {/* Branding & Copyright */}
      <div className="text-sm md:text-base mb-4">
        © {new Date().getFullYear()} Cuberto Clone - All Rights Reserved
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-6">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition duration-300"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition duration-300"
        >
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
