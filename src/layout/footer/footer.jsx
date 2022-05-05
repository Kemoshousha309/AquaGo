import "./footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <footer className="footer container">
      <p className="footer__paragraph">
        Aqua Go is a tool to help aquaculture engineers to take precise
        decisions. The tool helps to develop this field and make the engineer's
        life easier by doing aquaculture calculations faster and safer.
      </p>
      <div className="footer__contact">
        <a
          rel="noreferrer"
          target="_blank"
          className="footer__icon"
          href="https://www.facebook.com/profile.php?id=100003889426275 "
        >
          <FacebookIcon fontSize="large" />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          className="footer__icon"
          href="https://www.linkedin.com/in/karim-shousha-0439291b9/"
        >
          <LinkedInIcon fontSize="large" />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          className="footer__icon"
          href="https://www.instagram.com/kemoshousha309/"
        >
          <InstagramIcon fontSize="large" />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          className="footer__icon"
          href="https://twitter.com/kemoshousha309"
        >
          <TwitterIcon fontSize="large" />
        </a>
      </div>
      <small className="footer__copyright">
        Copyright &copy; reserved to{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://kemoshousha309.github.io/portofolio/"
          className="footer__authorName"
        >
          Kareem Shousha
        </a>
      </small>
    </footer>
  );
}

export default Footer;
