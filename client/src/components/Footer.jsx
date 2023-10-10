import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-title">CyberMeet</p>
      <span className="footer-dot">·</span>
      <a
        href="https://github.com/jamesjbustos/cyber-meet"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon fontSize="small" />
      </a>
    </footer>
  );
};

export default Footer;
