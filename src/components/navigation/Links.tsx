import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export function OutsideLinks() {
  return (
    <>
      <a
        href="https://github.com/ShanRonaldson"
        target="_blank"
        rel="noreferrer"
        className="outside-link"
      >
        <FontAwesomeIcon icon={faGithub} />
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/shannon-ronaldson-562b98bb/"
        target="_blank"
        rel="noreferrer"
        className="outside-link"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
        LinkedIn
      </a>
    </>
  );
}
